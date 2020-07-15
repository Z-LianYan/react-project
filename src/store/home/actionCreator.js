
import { GET_SLIDE_CLASSIFY_DATA,HOT_RECOMMEND_LIST,GET_TOUR_DATA,GET_FLOOR_LIST } from './const';

const actionCreator = {

    getSlideClassifyData(data) {
        let action = {
            type: GET_SLIDE_CLASSIFY_DATA,
            data
        }
        return action
    },

	getHotRecommendList(data) {
        let action = {
            type: HOT_RECOMMEND_LIST,
            data
        }
        return action
    },

    getTourData(data){
        let action = {
            type:GET_TOUR_DATA,
            data
        }
        return action;
    },

    getFloorList(data){
        let action = {
            type:GET_FLOOR_LIST,
            data
        }
        return action;
    }

}

export default actionCreator