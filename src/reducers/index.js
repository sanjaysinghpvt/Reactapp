import { combineReducers } from 'redux' 
import { routerReducer as routing } from 'react-router-redux';

// combine reducers
const appReducer = combineReducers({
	routing
})

const rootReducer = (state, action) => {  
	return appReducer(state, action)
}

export default rootReducer