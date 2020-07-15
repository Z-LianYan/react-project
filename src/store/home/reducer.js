

import state from './state';

import { GET_SLIDE_CLASSIFY_DATA,HOT_RECOMMEND_LIST,GET_TOUR_DATA,GET_FLOOR_LIST } from './const';

const reducer = (previousState = state , action) => {
	let new_state = { ...previousState }
	switch(action.type){
		case GET_SLIDE_CLASSIFY_DATA:
			new_state.slide_list = action.data.slide_list;
			new_state.classify_list = action.data.classify_list;
			break;
		case HOT_RECOMMEND_LIST:
			new_state.hotRecommendList = action.data||[];
			break;
		case GET_TOUR_DATA:
			new_state.tourData = action.data||[];
			break;
		case GET_FLOOR_LIST:
			new_state.floorList = action.data||[];
			break;
		default: break;
	}
	return new_state;
}
export default reducer