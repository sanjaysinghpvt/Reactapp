import React, { Component } from "react";
import "./App.css";
import { createStore/*, applyMiddleware */ } from 'redux'
import { Provider } from 'react-redux'
import Routes from "./Routes.js";
import rootReducer from "./reducers"

const Store = createStore(
  rootReducer
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
