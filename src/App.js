import './App.css';
import State from './state';
import { useState, useEffect } from 'react';
import QuestionBox from './QuestionBox';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        Header
      </header>
    </div>
    <body className="App-body">
      <QuestionBox/>
    </body>
    <div>
      <footer className="App-footer"/>
    </div>
    </>
  );
}

export default App;
