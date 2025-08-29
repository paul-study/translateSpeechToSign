import React from 'react';
import SignDictionary from '../data/signDictionary';
import './SignDisplay.css';

// Component for displaying sign language translations without descriptions
const SignDisplay = ({ words }) => {
  const getSignForWord = (word) => {
    const normalizedWord = word.toLowerCase();
    
    // Check if word exists in dictionary
    if (SignDictionary[normalizedWord]) {
      return {
        type: 'sign',
        word: normalizedWord,
        display: SignDictionary[normalizedWord].display,
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
      }))
    };
  };

  return (
    <div className="sign-display">
      <div className="sign-controls">
        <h3>🤟 NZ Sign Language Translation:</h3>
      </div>

      <div className="signs-container">
        {words.map((word, index) => {
          const signData = getSignForWord(word);
          
          return (
            <div 
              key={index} 
              className={`sign-card ${signData.type}`}
            >
              <div className="sign-visual">
                {signData.type === 'sign' ? (
                  signData.video ? (
                    <video 
                      className="sign-video"
                      controls
                      muted
                      autoPlay
                      playsInline
                      preload="auto"
                      loop
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
