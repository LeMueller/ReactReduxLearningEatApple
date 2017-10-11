require('normalize.css/normalize.css');
//require('styles/App.css');

import React from 'react';

import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '../reducers/index.js';

import AppleBasket from '../containers/AppleBasket.jsx'
import '../styles/appleBasket.scss'
import '../styles/appleitem.scss'


const store = createStore(reducer, applyMiddleware(thunk));


class AppComponent extends React.Component {
  render() {
    return (
      	<Provider store={store}>
        	<AppleBasket />
    	</Provider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
