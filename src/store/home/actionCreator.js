
import { HOT_RECOMMEND_LIST,GET_TOUR_DATA } from './const';

const actionCreator = {
	getHotRecommendList(params) {
        let action = {
            type: HOT_RECOMMEND_LIST,
            params
        }
        return action
    },

    getTourData(){
        let action = {
            type:GET_TOUR_DATA
        }
        return action;
    }

}

export default actionCreator