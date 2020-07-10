

import state from './state';

import { GET_HOT_RECOMMEND_LIST,get_tour_data } from "@/api/home";

import { HOT_RECOMMEND_LIST,GET_TOUR_DATA } from './const';

const reducer = (previousState = state , action) => {
	let new_state = { ...previousState }
	switch(action.type){
		case HOT_RECOMMEND_LIST:
			GET_HOT_RECOMMEND_LIST(action.params).then(res=>{
				new_state.hotRecommendList = res.hots_show_list;
			})
			break;
		case GET_TOUR_DATA:
			get_tour_data().then(res=>{
				new_state.hotRecommendList = res.hots_show_list;
			})
			break;
		default: break;
	}
	return new_state;
}
export default reducer