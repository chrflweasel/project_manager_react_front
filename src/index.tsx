import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from "react-router-dom";
// import './index.css'

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <BrowserRouter>
          <App />
          </BrowserRouter>
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
