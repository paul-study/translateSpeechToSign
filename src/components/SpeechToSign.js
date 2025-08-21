import React, { useState, useEffect } from 'react';
import SignDisplay from './SignDisplay';
import './SpeechToSign.css';

const SpeechToSign = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [words, setWords] = useState([]);
  const [recognition, setRecognition] = useState(null);
  const [error, setError] = useState('');
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Check if browser supports Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setIsSupported(false);
      setError('Speech Recognition is not supported in this browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;
    recognitionInstance.lang = 'en-US';

    recognitionInstance.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setTranscript(speechResult);
      
      // Convert speech to words array
      const wordsArray = speechResult.toLowerCase()
        .split(' ')
        .filter(word => word.trim() !== '')
        .map(word => word.replace(/[^\w]/g, '')); // Remove punctuation
      
      setWords(wordsArray);
      setIsListening(false);
    };

    recognitionInstance.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`);
      setIsListening(false);
    };

    recognitionInstance.onend = () => {
      setIsListening(false);
    };

    setRecognition(recognitionInstance);
  }, []);

  const startListening = () => {
    if (!recognition) return;
    
    setError('');
    setTranscript('');
    setWords([]);
    setIsListening(true);
    
    try {
      recognition.start();
    } catch (err) {
      setError('Error starting speech recognition');
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
    setIsListening(false);
  };

  const clearResults = () => {
    setTranscript('');
    setWords([]);
    setError('');
  };

  if (!isSupported) {
    return (
      <div className="speech-to-sign">
        <div className="error-message">
          <h3>⚠️ Browser Not Supported</h3>
          <p>This app requires a browser that supports Speech Recognition.</p>
          <p>Please use:</p>
          <ul>
            <li>Google Chrome</li>
            <li>Microsoft Edge</li>
            <li>Safari (iOS/macOS)</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="speech-to-sign">
      <div className="controls">
        <button 
          className={`mic-button ${isListening ? 'listening' : ''}`}
          onClick={isListening ? stopListening : startListening}
          disabled={!recognition}
        >
          {isListening ? '🛑 Stop Listening' : '🎤 Start Speaking'}
        </button>
        
        {(transcript || words.length > 0) && (
          <button className="clear-button" onClick={clearResults}>
            🗑️ Clear
          </button>
        )}
      </div>

      {isListening && (
        <div className="listening-indicator">
          <div className="pulse"></div>
          <p>Listening... Speak now!</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>❌ {error}</p>
        </div>
      )}

      {transcript && (
        <div className="transcript">
          <h3>You said:</h3>
          <p>"{transcript}"</p>
        </div>
      )}

      {words.length > 0 && (
        <SignDisplay words={words} />
      )}
    </div>
  );
};

export default SpeechToSign;
