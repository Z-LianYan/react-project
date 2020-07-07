import React,{ Component } from "react";
import './index.scss';


import actionCreator from '@/store/home/actionCreator'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



import { get_classify_home,GET_TOUR_LIST } from "@/api/home";

import Classify from "./Classify";
import SlideShow from "@/view/Home/Slideshow/index";

import MyNavBar from "@/view/components/NavBar/index";

import HotRecommendList from "@/view/Home/HotRecommendList/index";

import Tour from "@/view/Home/Tour/index";


class Home extends Component{
    constructor(props){//构造函数，最先被执行,通常在构造函数里初始化state对象或者给自定义方法绑定this
        // console.log("构造函数，最先被执行")
        super(props);
        this.state = {
            slideshowList:[],
            classifyList:[],
            tourData:[]
        }
        this.fetchData = this.fetchData.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState){//挂载更新都会执行 (必须返回一个有效的状态对象(或null))
        console.log("getDerivedStateFromProps 是个静态方法,当我们接收到新的属性想去修改我们state")
        return null;
    }

    fetchData(){
        get_classify_home({
            city_id: 0,
            abbreviation: ""
        }).then(data=>{
            console.log("123456",data);
            console.log("slide",data.slide_list);
            this.setState({
                classifyList: data.classify_list,
                slideshowList: data.slide_list
            })
        })
    }

    async fetchHotRecommendList(){
        // let result = await GET_HOT_RECOMMEND_LIST({city_id: 0});
        // this.setState({
        //     hotRecommendList:result.hots_show_list
        // })

        this.props.getHotRecommendList({city_id: 0});

        // setTimeout(() => {
            console.log("热更新列表------",this.props.home.hotRecommendList)
        // }, 2000);
        




    }

    async fetchTourData(){
        const result = await GET_TOUR_LIST();
        this.setState({
            tourData:result.list
        })
    }


    render(){
        return (
            <section className="home-container">
                <SlideShow slideshowList={this.state.slideshowList}/>
                <Classify classifyList={this.state.classifyList}/>
                <MyNavBar leftTitle="热门演出" rightTitle="全部" href="/热门演出"/>
                <HotRecommendList hotRecommendList={this.props.home.hotRecommendList}/>

                <MyNavBar leftTitle="巡回演出" rightTitle="全部" href="/巡回演出"/>
                <Tour tourData={this.state.tourData}/>


                <MyNavBar leftTitle="为你推荐"/>

            </section>
        )
    }

    componentDidMount(){
        // console.log("componentDidMount 组件装载之后调用")
        this.fetchData();
        this.fetchHotRecommendList();
        this.fetchTourData();
    }



    shouldComponentUpdate(nextProps, nextState){//nextProps新的属性 和 nextState变化之后的state
        //返回一个布尔值 true表示会触发重新渲染，false表示不会触发重新渲染，
        //默认返回true,我们通常利用此生命周期来优化React程序性能
        // console.log("shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){//prevProps和prevState，表示之前的属性和之前的state
        //这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，
        //如果你不想要返回值，可以返回null，此生命周期必须与componentDidUpdate搭配使用
        // console.log("getSnapshotBeforeUpdate 在render之后，componentDidUpdate之前调用")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        //参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot
        //第三个参数是getSnapshotBeforeUpdate返回的,如果触发某些回调函数时需要用到 DOM 元素的状态，
        //则将对比或计算的过程迁移至 getSnapshotBeforeUpdate，然后在 componentDidUpdate 中统一触发回调或更新状态
        // console.log("componentDidUpdate")
    }
    
    componentWillUnmount(){//组件 卸载 及 销毁 之前直接调用
        // console.log("getSnapshotBeforeUpdate 组件装载之后调用")
    }
    
    static getDerivedStateFromError(error){//异常处理
        // console.log("此生命周期会在渲染阶段后代组件抛出错误后被调用",error)
    }

    componentDidCatch(error,info){//异常处理
        // console.log("后代组件抛出错误后被调用",error,info)
    }

}

//mapDispatchToProps也是一个函数，接收一个参数为dispatch,其实就是store.dispatch
//返回什么，UI组件的属性上就有什么！
let mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreator, dispatch)
}

export default connect(state=>state, mapDispatchToProps)(Home);