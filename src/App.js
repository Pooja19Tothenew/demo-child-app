import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

function App() {
  // const location = useLocation();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location?.search);
    console.log(searchParams.get('originUrl'))

    setTimeout(() => {
      console.log("searchParams.get('originUrl')", searchParams.get('originUrl'))
      window.open(`${searchParams.get('originUrl')}`, '_self')
    }, [2000])
      // const dataToSend = { message: 'Hello from external link!' };
      
      // Send data to the parent window (the React application)
  }, [])
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
    </div>
  );
}

export default App;
