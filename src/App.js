import React from 'react'
import Header from './components/header.js';
import Main from './components/main.js';
import News from './components/News.js';


function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Main />
      <News />
    </div>
  );
}

export default App;
