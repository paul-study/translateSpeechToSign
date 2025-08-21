import React from 'react';
import SpeechToSign from './components/SpeechToSign';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🤟 Speech to Sign Language Translator</h1>
        <p>Speak into your microphone and see the signs!</p>
      </header>
      <main>
        <SpeechToSign />
      </main>
    </div>
  );
}

export default App;
