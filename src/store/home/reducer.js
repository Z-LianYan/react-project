

import state from './state';

import { GET_HOT_RECOMMEND_LIST } from "@/api/home";

import { HOT_RECOMMEND_LIST } from './const';

const reducer = (previousState = state , action) => {
	let new_state = { ...previousState }
	switch(action.type){
		case HOT_RECOMMEND_LIST:
			GET_HOT_RECOMMEND_LIST({city_id: 0}).then(res=>{
				new_state.hotRecommendList = res.hots_show_list;
				console.log("store热列表",res,new_state,action.param);
			})
		break;
			
		default: break;

	}

	return new_state
}


export default reducer