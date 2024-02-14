import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import 'tachyons';
import App from './containers/App';

//ReactDOM.createRoot(<Hello />, document.getElementById('root'));

const root = createRoot(document.getElementById('root'));
root.render(
            <div>
             <App /> 
            </div>
          );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)000)
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()