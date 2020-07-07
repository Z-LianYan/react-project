
import { HOT_RECOMMEND_LIST } from './const';

const actionCreator = {
	getHotRecommendList(param) {
        let action = {
            type: HOT_RECOMMEND_LIST,
            param
        }
        return action
    },
}

export default actionCreator