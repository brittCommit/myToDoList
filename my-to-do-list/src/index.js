import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function MyApp() {
  return (<ul>
            <li>Mail Package</li>
            <li> Go to store</li>
            <li>Spin</li>
          </ul>
          )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);

