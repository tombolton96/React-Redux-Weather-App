import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './Store/configureStore';
import { Provider } from 'react-redux';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

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

// prompt.prompt();
// prompt.userChoice
//     .then((choiceResult) => {
//         if (choiceResult.outcome === 'accepted') {
//             console.log('User accepted A2HS prompt');
//         } else {
//             console.log('User dismissed A2HS prompt');
//         }
//         prompt = null;
//     });

    // window.addEventListener('appinstalled', (e) => {
    //     app.logEvent('a2hs', 'installed');
    // });