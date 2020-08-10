import React from 'react';
// import logo from './logo.svg';
// import '../src/App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Data from './components/Data';

function App() {
  return (
    <div className="App">
    <Wrapper>
      <Header />
      <Nav />
      <Main />
      </Wrapper>
    </div>
  );
}

export default App;
