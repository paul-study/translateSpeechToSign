import React, { useState, useEffect, useRef } from 'react';
import SignDictionary from '../data/signDictionary';
import './SignDisplay.css';

const SignDisplay = ({ words }) => {
  const [currentSignIndex, setCurrentSignIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);
  const videoRefs = useRef([]);

  // Function to enable autoplay after user interaction
  const enableAutoplay = async () => {
    setAutoplayEnabled(true);
    // Try to play all current videos to test autoplay
    for (let video of videoRefs.current) {
      if (video && video.play) {
        try {
          await video.play();
          video.pause(); // Pause after successful play test
        } catch (error) {
          console.log('Autoplay test failed:', error.message);
        }
      }
    }
  };

  // Function to play all videos when words change
  useEffect(() => {
    if (words && words.length > 0 && autoplayEnabled) {
      console.log('Words changed, attempting to play videos:', words);
      // Small delay to ensure videos are loaded
      const timer = setTimeout(() => {
        videoRefs.current.forEach((video, index) => {
          if (video && video.play) {
            console.log(`Attempting to play video ${index}`);
            video.currentTime = 0; // Reset to beginning
            video.play().catch(error => {
              console.log(`Video ${index} autoplay failed:`, error.message);
              // Fallback: try playing on user interaction
            });
          }
        });
      }, 200); // Increased delay
      
      return () => clearTimeout(timer);
    }
  }, [words, autoplayEnabled]);

  const handleVideoRef = (element, index) => {
    if (element) {
      videoRefs.current[index] = element;
    }
  };

  const getSignForWord = (word) => {
    const normalizedWord = word.toLowerCase();
    
    // Check if word exists in dictionary
    if (SignDictionary[normalizedWord]) {
      return {
        type: 'sign',
        word: normalizedWord,
        display: SignDictionary[normalizedWord].display,
        description: SignDictionary[normalizedWord].description,
        video: SignDictionary[normalizedWord].video || null
      };
    }
    
    // If not in dictionary, use fingerspelling
    return {
      type: 'fingerspell',
      word: normalizedWord,
      letters: normalizedWord.split('').map(letter => ({
        letter: letter,
        imagePath: SignDictionary.fingerspelling && SignDictionary.fingerspelling[letter] 
          ? SignDictionary.fingerspelling[letter] 
          : null
      })),
      description: `Fingerspell: ${normalizedWord}`
    };
  };

  const playSequence = () => {
    setIsPlaying(true);
    setCurrentSignIndex(0);
    
    const interval = setInterval(() => {
      setCurrentSignIndex(prev => {
        if (prev >= words.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 2000); // 2 seconds per sign
  };

  const stopSequence = () => {
    setIsPlaying(false);
    setCurrentSignIndex(0);
  };

  return (
    <div className="sign-display">
      <div className="sign-controls">
        <h3>🤟 Sign Language Translation:</h3>
        
        {!autoplayEnabled && (
          <div className="autoplay-controls">
            <button className="enable-autoplay-button" onClick={enableAutoplay}>
              🎬 Enable Video Autoplay
            </button>
            <p className="autoplay-hint">Click to enable automatic video playback when you speak</p>
          </div>
        )}
        
        <div className="playback-controls">
          {!isPlaying ? (
            <button className="play-button" onClick={playSequence}>
              ▶️ Play Sequence
            </button>
          ) : (
            <button className="stop-button" onClick={stopSequence}>
              ⏹️ Stop
            </button>
          )}
        </div>
      </div>

      <div className="signs-container">
        {words.map((word, index) => {
          const signData = getSignForWord(word);
          const isActive = isPlaying && index === currentSignIndex;
          
          return (
            <div 
              key={index} 
              className={`sign-card ${isActive ? 'active' : ''} ${signData.type}`}
            >
              <div className="sign-visual">
                {signData.type === 'sign' ? (
                  signData.video ? (
                    <video 
                      ref={(el) => handleVideoRef(el, index)}
                      className="sign-video"
                      controls
                      muted
                      autoplay
                      playsInline
                      preload="auto"
                      loop
                      onClick={(e) => {
                        // Manual play on click if autoplay failed
                        if (e.target.paused) {
                          e.target.currentTime = 0;
                          e.target.play();
                        }
                      }}
                      onLoadedData={(e) => {
                        // Try to play when video data is loaded
                        console.log('Video loaded, attempting autoplay');
                        e.target.play().catch(err => {
                          console.log('Autoplay prevented:', err.message);
                        });
                      }}
                      onCanPlay={(e) => {
                        // Additional attempt when video can play
                        if (e.target.paused) {
                          console.log('Video can play, attempting autoplay');
                          e.target.play().catch(err => {
                            console.log('Autoplay prevented on canplay:', err.message);
                          });
                        }
                      }}
                    >
                      <source src={signData.video} type="video/mp4" />
                      <div className="sign-icon">🤟</div>
                    </video>
                  ) : (
                    <div className="sign-icon">🤟</div>
                  )
                ) : (
                  <div className="fingerspell-icon">✋</div>
                )}
              </div>
              <div className="sign-info">
                <div className="word">{word}</div>
                {signData.type === 'sign' ? (
                  <div className="sign-representation">{signData.display}</div>
                ) : (
                  <div className="fingerspell-letters">
                    {signData.letters.map((letterData, letterIndex) => (
                      <div key={letterIndex} className="letter-container">
                        {letterData.imagePath ? (
                          <img 
                            src={letterData.imagePath} 
                            alt={`ASL letter ${letterData.letter.toUpperCase()}`}
                            className="fingerspell-image"
                          />
                        ) : (
                          <div className="letter-fallback">{letterData.letter.toUpperCase()}</div>
                        )}
                        <div className="letter-label">{letterData.letter.toUpperCase()}</div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="sign-description">{signData.description}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="sign-legend">
        <div className="legend-item">
          <span className="legend-icon">🤟</span>
          <span>Dictionary Sign</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon">✋</span>
          <span>Fingerspelling</span>
        </div>
      </div>
    </div>
  );
};

export default SignDisplay;
