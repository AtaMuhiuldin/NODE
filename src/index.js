import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'glyphicons\\glyphicons.js'
import Counter from './components/counter';
import Counters from './components/counters';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
