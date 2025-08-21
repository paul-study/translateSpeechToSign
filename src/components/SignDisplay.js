import React, { useState } from 'react';
import SignDictionary from '../data/signDictionary';
import './SignDisplay.css';

const SignDisplay = ({ words }) => {
  const [currentSignIndex, setCurrentSignIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getSignForWord = (word) => {
    const normalizedWord = word.toLowerCase();
    
    // Check if word exists in dictionary
    if (SignDictionary[normalizedWord]) {
      return {
        type: 'sign',
        word: normalizedWord,
        display: SignDictionary[normalizedWord].display,
        description: SignDictionary[normalizedWord].description
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
                  <div className="sign-icon">🤟</div>
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
