import React from "react";
import './App.css';
import QuestionBox from './QuestionBox';

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
      </header>
    </div>
    <body
      className="App-body"
      style={{
        backgroundImage: `url(${background})`,
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
