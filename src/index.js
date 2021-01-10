import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from 'arwes';

const myTheme = {
  color: {
    primary: {
      base: '#ff0000',
      dark: '#ff0000',
      light: '#ff0000'
    },
    secondary: {
      base: '#00ff80',
      dark: '#00ff80',
      light: '#00ff80'
    }
  }
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(myTheme)}>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
