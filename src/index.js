import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
//stylesheets
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.scss';
//components
import configureStore from './Store/configureStore';
import App from './App';

const store = configureStore();

require('dotenv').config()

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


let prompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    prompt = e;

prompt.prompt();
prompt.userChoice
    .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted A2HS prompt');
        } else {
            console.log('User dismissed A2HS prompt');
        }
        prompt = null;
    });
});