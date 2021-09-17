import { useState } from 'react';
import './App.css';
import ValidEmail from './ValidEmail';

function App() {
  const [ valueInput, getValue ] = useState("")
  const style = {
    display: "flex",
    flexDirection: "column",
    padding: "20px 100px",
    border: "solid 5px #61dafb",
    marginBottom: "50px",
    marginTop: "10px"
  }

  const handleChange = (event) => {
    getValue(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>
            Verifique o Email
            <input
              style={style}
              className="input"
              type="text"
              onChange={ (e) => handleChange(e) }
              data-testid="email-input"
            />
          </label>
          < ValidEmail email={ valueInput } data-testid="valid-camp" />
        </div>
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
