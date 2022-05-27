import './App.css';
import State from './state';
import { useState, useEffect } from 'react';
import QuestionBox from './QuestionBox';

// import background from './landscape.jpg';
import background from './balloons_375.jpg';

function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
    }}>
    <div className="App">
      <header className="App-header">
        {/* Header */}
      </header>
    </div>
    <body
      className="App-body"
      style={{
        backgroundImage: `url(${background})`,
        // backgroundRepeat
      }}
    >
      <QuestionBox/>
    </body>
    <div>
      <footer className="App-footer"/>
    </div>
    </div>
  );
}

export default App;
