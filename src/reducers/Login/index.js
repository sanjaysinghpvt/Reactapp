let defaultState = {
	loading: true,
}

function login(state = defaultState, action) {
	switch (action.type) {
		case "UPDATE_FORM_VALUE":
			console.log("action")
			console.log(action)
			return Object.assign({}, state, {
				loading: true
			})
			
		default:
			return state
	}
}

export default login