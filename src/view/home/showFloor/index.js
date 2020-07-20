import React,{ Component } from "react";
import "./index.scss";

import MyNavBar from "@/view/components/NavBar/index";

import { NavLink } from 'react-router-dom';

import Swiper from 'swiper';
import 'swiper/css/swiper.css';

import { ColorExtractor } from 'react-color-extractor';




export default class ShowFloor extends Component{
    constructor(props){//构造函数，最先被执行,通常在构造函数里初始化state对象或者给自定义方法绑定this
        console.log("构造函数，最先被执行")
        super(props);
        this.state = {
            colors:{}
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){//挂载更新都会执行 (必须返回一个有效的状态对象(或null))
        // console.log("getDerivedStateFromProps 是个静态方法,当我们接收到新的属性想去修改我们state")
        return null;
    }

    render(){
        const { floorList } = this.props; 
        // console.log("render函数是纯函数--------",floorList)
        return (
            <section>
                {
                    floorList.length && floorList.map((item,idx)=>{
                        if(item.list.length<5) return true;
                        return (
                            <div className="item-wrapper" key={idx}>
                                <div className="my-nav-bar">
                                    <MyNavBar leftTitle={item.title} href="/"/>
                                </div>
                                <div className="top-content padding-rl" style={{background:this.state.colors[item.title]}}>
                                    <div className="img-floor-wrapper">
                                        <ColorExtractor getColors={(colors)=>{
                                            const obj = Object.assign({},this.state.colors)
                                            obj[item.title] = colors[5]
                                            this.setState({
                                                colors:obj
                                            })
                                        }}>
                                            <img src={item.list[0].pic} alt=""/>
                                        </ColorExtractor>
                                        <div dangerouslySetInnerHTML = {{__html:item.list[0].ico}} ></div>
                                    </div>
                                    <div className="top-content-right padding-r">
                                        <p>
                                            <strong className="date">
                                                { this.$formatDate(item.list[0].show_time*1000) }
                                            </strong>
                                            <span className="hour-minute">
                                                { " " + item.list[0].week + " " + this.$formatHourMinute(item.list[0].show_time*1000) }
                                            </span>
                                        </p>
                                        <p className="overflow-ellipsis-tow title">{item.list[0].schedular_name}</p>
                                        <p className="addr">
                                            {item.list[0].city_name} | {item.list[0].venue_name}
                                        </p>
                                    </div>
                                </div>
                                <div className="bottom-content padding-t padding-l">
                                    <div className="swiper-container floor-list">
                                        <div className="swiper-wrapper">
                                            {
                                                item.list.length && item.list.map((itm,index)=>{
                                                    if(index===0) return true;
                                                    return (
                                                        <NavLink 
                                                        key={index} 
                                                        to="/" 
                                                        className="swiper-slide hot-recommend-item item-margin">
                                                            <div className="img-wrapper">
                                                                <img src={itm.pic} alt=""/> 
                                                                <div dangerouslySetInnerHTML = {{__html:itm.ico}} ></div>
                                                            </div>
                                                            
                                                            <p className="overflow-ellipsis-tow title">
                                                                {itm.schedular_name}
                                                            </p>
                                                            <p className="price-wrapper">
                                                                <strong>¥ {itm.low_price && itm.low_price.replace(".00","")}</strong>
                                                                <span>起</span>
                                                            </p>
                                                        </NavLink>
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </section>
        )
    }

    componentDidMount(){
        console.log("componentDidMount 组件装载之后调用")

        setTimeout(() => {
            new Swiper('.floor-list',{
                slidesPerView: 'auto',
                // loopedSlides: 5,
            })
        }, 1000);

        

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