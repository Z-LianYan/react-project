

import { combineReducers } from 'redux' 
//Redux 提供了一个 combineReducers 方法，用于 Reducer 的拆分，
//要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer

import user from './user/reducer'

const reducer = combineReducers({
	user
})

export default reducer