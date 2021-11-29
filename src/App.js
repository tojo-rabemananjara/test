import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [subject, setSubject] = useState('');
  const [emailDest, setEmailDest] = useState('');
  const [body, setBody] = useState('');

  const handleSubjectChange = ({target}) => {
    setSubject(target.value);
  }
  const handleEmailChange = ({target}) => {
    setEmailDest(target.value);
  }
  const handleBodyChange = ({target}) => {
    setBody(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`mailto:${emailDest}?subject=${subject}&body=${body}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='subject'
          value={subject}
          onChange={handleSubjectChange}
          placeholder={'enter subject'}
          required
        />
        <br/>
        <label htmlFor='emailDest'>Email Destination:</label>
        <input
          type='text'
          id='emailDest'
          value={emailDest}
          onChange={handleEmailChange}
          placeholder={'enter email destination'}
          required
        />
        <br/>
        <label htmlFor='body'>Email Body:</label>
        <textarea
          id='body'
          rows="4"
          cols="50"
          value={body}
          onChange={handleBodyChange}
          required
        />
        <br/>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default App;
