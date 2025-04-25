import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { store } from './redux/store';
=======
import store from './store/store';
>>>>>>> 1940ff8529de678b03eebe85d12aafcfc1dc35c8

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <div id="wrapper">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);

=======
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
>>>>>>> 1940ff8529de678b03eebe85d12aafcfc1dc35c8
reportWebVitals();
