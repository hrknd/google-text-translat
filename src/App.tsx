import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import google from './google';


function App() {
  const [translatedtext, setTranslatedText] = useState<string>('')
  const default_text = '検非違使に問われたる木樵りの物語'
  const google_key = '*****'
  const target_lang = 'en'
  
  const fetchTranslatedText = () => {
    google.translate(default_text, google_key, target_lang)
    .then(response => { 
      console.log(response)
      setTranslatedText(response.data.data.translations[0].translatedText)
    })
    .catch(e => {
        console.log(e)
    });
  }

  useEffect(() => {
    fetchTranslatedText()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {default_text}
        </p>
        {translatedtext && <p>{translatedtext}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
