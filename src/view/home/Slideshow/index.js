import React,{ Component } from "react";
import "./index.scss";

// import { Carousel } from 'antd-mobile';
import { NavLink } from 'react-router-dom';


import Swiper from 'swiper';
import 'swiper/css/swiper.css';

export default class Slideshow extends Component{
    constructor(props){//构造函数，最先被执行,通常在构造函数里初始化state对象或者给自定义方法绑定this
        super(props);
        this.state = {
            imgHeight:"100%"
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){//挂载更新都会执行 (必须返回一个有效的状态对象(或null))
        return null;
    }

    
    render(){

        const slideshowList = [];
        this.props.slideshowList.forEach( item => {
            if(item.url.indexOf("ticket")!==-1){
                slideshowList.push(item);
            }
        })


        return (
            <section className="slideshow-wrapper padding-rl">
                <div className="swiper-container">
                    <div className="swiper-wrapper">

                        {slideshowList.map((val,index) => (
                            <div className="swiper-slide" key={index}>
                                <NavLink
                                key={index}
                                to="/">
                                <img
                                    src={val.image_url}
                                    alt=""
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: '100%' });
                                        // console.log("图片加载")
                                    }}
                                />
                                </NavLink>
                            </div>
                        ))}
                        
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        )
    }

    componentDidMount(){
        setTimeout(() => {
            new Swiper('.swiper-container', {
                loop:true,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 3000,
                },
                // 分页器
                pagination: {
                    el: '.swiper-pagination'
                },
                
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
        console.log("componentDidUpdate")
        
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