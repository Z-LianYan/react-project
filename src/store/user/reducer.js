

import state from './state'
import { CHECK_USER_INFO } from './const.js'

const reducer = (previousState = state , action) => {
	let new_state = { ...previousState }
	console.log("reducer",new_state);
	switch(action.type){
		case CHECK_USER_INFO: 
			new_state.userInfo = action.userInfo; 
		break;
		
		default: break;
	}
	return new_state;
}


export default reducer;