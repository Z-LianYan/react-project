import actionCreator from '@/store/home/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const groupHome = connect(state=>state, dispatch => {

    //mapDispatchToProps也是一个函数，接收一个参数为 dispatch,其实就是store.dispatch
    //返回什么，UI组件的属性上就有什么！
    return bindActionCreators(actionCreator, dispatch)
});


export default groupHome

