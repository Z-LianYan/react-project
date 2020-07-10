import React,{ Component } from "react";
import './index.scss';


import GroupHome from '@/module/home';


import { ListView } from 'antd-mobile';

import { get_slide_classify_home,get_tour_data,GET_RECOMMEND_LIST } from "@/api/home";

import Classify from "@/view/Home/Classify/index";
import SlideShow from "@/view/Home/Slideshow/index";

import MyNavBar from "@/view/components/NavBar/index";

import HotRecommendList from "@/view/Home/HotRecommendList/index";

import Tour from "@/view/Home/Tour/index";

import ForYouRecommendList from "@/view/Home/ForYouRecommendList/index";

const CustomComponent = ({slideshowList,classifyList,hotRecommendList,tourData}) =>{
    return (
        <div>
            <SlideShow slideshowList={slideshowList}/>
            <Classify classifyList={classifyList}/>
            <MyNavBar leftTitle="热门演出" rightTitle="全部" href="/热门演出"/>
            <HotRecommendList hotRecommendList={hotRecommendList}/>

            <MyNavBar leftTitle="巡回演出" rightTitle="全部" href="/巡回演出"/>
            <Tour tourData={tourData}/>


            <MyNavBar leftTitle="为你推荐"/>

            <ForYouRecommendList/>
        </div>
    )
}

class Home extends Component{
    constructor(props){//构造函数，最先被执行,通常在构造函数里初始化state对象或者给自定义方法绑定this
        // console.log("构造函数，最先被执行")
        super(props);


        // 创建ListViewDataSource对象
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2 // rowHasChanged(prevRowData, nextRowData); 用其进行数据变更的比较
        })


        this.state = {
            dataSource,
            slideshowList:[],
            classifyList:[],
            tourData:[],
            recommendList:[]
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){//挂载更新都会执行 (必须返回一个有效的状态对象(或null))
        // console.log("getDerivedStateFromProps 是个静态方法,当我们接收到新的属性想去修改我们state")
        return null;
    }

    fetchSlideClassifyList(){
        
        get_slide_classify_home({
            city_id: 0,
            abbreviation: ""
        }).then(data=>{
            this.setState({
                classifyList: data.classify_list,
                slideshowList: data.slide_list
            })
        })

        // this.props.get_slide_classify_home();
        console.log("轮播图",this.props)


    }

    async fetchHotRecommendList(){
        this.props.getHotRecommendList({city_id: 0});
    }

    async fetchTourData(){
        const result = await get_tour_data();
        this.setState({
            tourData:result.list
        })
    }

    async fetchRecommendList(){
        const result = await GET_RECOMMEND_LIST({
            city_id: 0,
            category: "",
            keywords: "",
            venue_id: "",
            start_time: "",
            page: 1,
            referer_type: "index"
        });
        
        
        console.log("推荐列表",result);
    }

    onEndReached(){
        console.log("onEndReached")
    }

    renderScrollComponent(){
        const { slideshowList,classifyList,tourData } = this.state;
        return <CustomComponent 
        key="001"
        slideshowList={slideshowList} 
        classifyList={classifyList}
        hotRecommendList={this.props.home.hotRecommendList}
        tourData={tourData}/>
    }


    render(){

        return (
                <ListView
                    // ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderHeader={() => <span style={{position:"fixed",top:0}}>header</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    renderRow={(rowData, sectionID, rowID)=>{
                        return (<div style={{backgroundColor:"#ccc",height:"50px"}}>{rowID}</div>)
                    }}
                    renderSectionWrapper={()=>this.renderScrollComponent()}
                    style={{
                        height: document.documentElement.clientHeight-50,
                        overflow: 'auto',
                        marginBottom:"50px"
                    }}
                    pageSize={4}
                    onScroll={() => { console.log('scroll',document.documentElement.clientHeight); }}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />

            
        )
    }

    componentDidMount(){
        // console.log("componentDidMount 组件装载之后调用")
        this.setState({dataSource:this.state.dataSource.cloneWithRows([{}])})//数据源中的数据本身是不可修改的,要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法
        
        this.fetchSlideClassifyList();
        this.fetchHotRecommendList();
        this.fetchTourData();
        this.fetchRecommendList();
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

export default GroupHome(Home)