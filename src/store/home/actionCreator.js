
import { HOT_RECOMMEND_LIST } from './const';

const actionCreator = {
	getHotRecommendList(params) {
        let action = {
            type: HOT_RECOMMEND_LIST,
            params
        }
        return action
    },

    
}

export default actionCreator