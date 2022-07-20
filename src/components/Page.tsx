import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function Page({ children }: { children: React.ReactElement }) {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/" className="App-link">Home</Link>
            </li>
            <li>
              <Link to="/not-home" className="App-link">Not Home</Link>
            </li>
          </ul>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        {children}
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
  
export default Page;
  