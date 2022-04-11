import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld5 from './components/HelloWorld5';
import HelloWorld6 from './components/HelloWorld6/HelloWorld6';
import HelloWorld7 from './components/HelloWorld7/HelloWorld7';
import HelloWorld8 from './components/HelloWorld8';
import './App.css'
//import logo from './logo.svg';
//import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}*/
const App: React.FC = () => {
  return (
  <div className="Container">
  <div className="Column1">
  <HelloWorld8 />
  </div>
  <div className="Column2">
  <HelloWorld4 />
  </div>
  <div className="Column3">
  <HelloWorld7 />
  </div>
  </div>
  );
 }

export default App;
