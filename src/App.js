import logo from './logo.svg';
import './App.css';
import Popup from './components/Popup';
import EndPoints from './components/EndPoints';
import { Navigation } from './components/Navigation';
import { useState } from 'react';
import { useLocalStorage } from './lib/useLocalStorage';

function App() {
  const [endpoints, setEndpoints] = useLocalStorage('endpoints', []);
  const [popupEndPoints, openPopupEndPoints] = useState(false);

  const nav = [
    { key: 'endpoints', label: 'End Points' }
  ];

  const onMenu = (menuKey) => {
    console.log(endpoints)
    if (menuKey === 'endpoints') openPopupEndPoints(true);
  }

  return (
    <div className="App">
      <Navigation onMenu={onMenu} items={nav} />
      {popupEndPoints && <Popup isOpen="true" close={()=>openPopupEndPoints(false)}><EndPoints endpoints={endpoints} updateEndPoints={e => setEndpoints(e)} /></Popup>}
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
    </div>
  );
}

export default App;
