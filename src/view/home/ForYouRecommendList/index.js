import React,{ Component } from "react";
import "./index.scss";

import { 
    GET_RECOMMEND_LIST
} from "@/api/home";

export default class ForYouRecommendList extends Component{
    constructor(props){//构造函数，最先被执行,通常在构造函数里初始化state对象或者给自定义方法绑定this
        // console.log("构造函数，最先被执行")
        super(props);
        this.state = {
            forYourecommendListLeft:[],
            forYourecommendListRight:[],
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){//挂载更新都会执行 (必须返回一个有效的状态对象(或null))
        // console.log("getDerivedStateFromProps 是个静态方法,当我们接收到新的属性想去修改我们state")

        console.log("nextProps-=",nextProps,"prevState-=",prevState);

        if(nextProps.forYourecommendList.length){
            return {
                forYourecommendList:nextProps.forYourecommendList
            }
        }



        return null;
    }


    render(){
        // console.log("render函数是纯函数===",this.props);
        // const { forYourecommendList } = this.props;
        

        return (
            <section className="for-you-recommend-list padding-rl clear" ref={ref=>this.newPinterest = ref}>
                <ul className="item1">
                    { this.state.forYourecommendListLeft.length && this.state.forYourecommendListLeft.map((item,index)=>{
                        return (
                            <a href="/" className="item-wrapper" key={index}>
                                <div className="img-wrapper">
                                    <img src={item.pic} alt=""/>
                                    <span className="addr">广州</span>
                                </div>
                                
                                <div className="for-you-commend-content">
                                    <div className="title-wrapper">
                                        {
                                        item.method_icon? <img src={item.method_icon} alt=""/>:''
                                        }
                                        <p className={item.method_icon?"overflow-ellipsis-tow title":"overflow-ellipsis-tow"}>{item.name}</p>
                                    </div>
                                    <p className="show-scope">
                                        {this.$formatDate(item.start_show_timestamp*1000) + " - " + this.$formatMonthDay(item.end_show_timestamp*1000) }
                                    </p>
                                    <p className="price">
                                        <strong>
                                            ¥ {item.min_price}
                                        </strong>
                                        <span> 起</span>
                                    </p>
                                    <div className="group-tag">
                                        {item.support_desc.map((itm,idx)=>{
                                            return (
                                                <span className="tag-item" key={idx}>{itm}</span>
                                            )
                                        })}
                                        
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </ul>
                <ul className="item2">
                    { this.state.forYourecommendListRight.length && this.state.forYourecommendListRight.map((item,index)=>{
                        return (
                            <a href="/" className="item-wrapper" key={index}>
                                <div className="img-wrapper">
                                    <img src={item.pic} alt=""/>
                                    <span className="addr">{item.city_name}</span>
                                </div>
                                
                                <div className="for-you-commend-content">
                                    <div className="title-wrapper">
                                        {
                                        item.method_icon? <img src={item.method_icon} alt=""/>:''
                                        }
                                        <p className={item.method_icon?"overflow-ellipsis-tow title":"overflow-ellipsis-tow"}>{item.name}</p>
                                    </div>
                                    <p className="show-scope">
                                        {this.$formatDate(item.start_show_timestamp*1000) + " - " + this.$formatMonthDay(item.end_show_timestamp*1000) }
                                    </p>
                                    <p className="price">
                                        <strong>
                                            ¥ {item.min_price}
                                        </strong>
                                        <span> 起</span>
                                    </p>
                                    <div className="group-tag">
                                        {item.support_desc.map((itm,idx)=>{
                                            return (
                                                <span className="tag-item" key={idx}>{itm}</span>
                                            )
                                        })}
                                        
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </ul>
            </section>
        )
    }


    //获取高度最低的一个
    getMinContain = () =>{
        const {newPinterest} = this;
        const {childNodes} = newPinterest;
        let minData = childNodes[0];
        childNodes && childNodes.forEach(item=>{
            if(item.offsetHeight<minData.offsetHeight){
                minData = item
            }
        });
        return minData;
    };



    componentDidMount(){
        console.log("componentDidMount 组件装载之后调用");
        this.fetchRecommendList()
    }

    getData(){
        console.log("获取数据")
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

        // console.log("结果----====---=-=-=",result);

        // const { forYourecommendList } = this.props;
        const {  forYourecommendListLeft,forYourecommendListRight } = this.state;


        result.list.forEach(item=>{

            const a = this.getMinContain();
        
            switch (a.className){
                case 'item1':forYourecommendListLeft.push(item);break;
                case 'item2':forYourecommendListRight.push(item);break;
                default:return null;
            }
            this.setState({forYourecommendListLeft,forYourecommendListRight});
        })

        console.log("婚纱哈哈哈哈哈哈",this.state.forYourecommendListLeft,this.state.forYourecommendListRight)



        this.setState({
            forYourecommendList:result.list
        })

        console.log("为你推荐列表",result,this.state.forYourecommendList);

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





        // const { forYourecommendList } = this.props;
        // const {  forYourecommendListLeft,forYourecommendListRight } = this.state;
        // forYourecommendList.map(item=>{

        //     const a = this.getMinContain();
        
        //     switch (a.className){
        //         case 'item1':forYourecommendListLeft.push(item);break;
        //         case 'item2':forYourecommendListRight.push(item);break;
        //         default:return null;
        //     }
        //     this.setState({forYourecommendListLeft,forYourecommendListRight});
        // })

        // console.log("婚纱哈哈哈哈哈哈",forYourecommendList,this.state.forYourecommendListLeft,this.state.forYourecommendListRight)


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