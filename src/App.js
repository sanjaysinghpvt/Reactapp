import React, { Component } from "react";
import "./App.css";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Routes from "./Routes.js";
import rootReducer from "./reducers"
import thunk from 'redux-thunk'; 

const Store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  
);

class App extends Component {
  render() {
    return (
			<Provider store={Store}>
					<Routes />
			</Provider>			
		)
  }
}
export default App;
