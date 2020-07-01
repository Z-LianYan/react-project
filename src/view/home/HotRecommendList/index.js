import React, { Component } from "react";

import { NavLink } from 'react-router-dom';

import Swiper from 'swiper';
import 'swiper/css/swiper.css';

import "./index.scss";

export default class HotRecommendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotRecommendList:[]
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps 是个静态方法,当我们接收到新的属性想去修改我们state")
        return null;
    }


    render() {
        const { hotRecommendList } = this.props;
        console.log("热门推荐",hotRecommendList)

        return (
            <div className="swiper-container hot-recommend-list padding-t padding-l">
                <div className="swiper-wrapper">
                    {
                        hotRecommendList.map((item,idx)=>(
                            <NavLink 
                            key={idx} 
                            to="/" 
                            className="swiper-slide hot-recommend-item item-margin">
                                <img 
                                src={item.pic}
                                alt=""/>
                                <p className="overflowEllipsis-tow">
                                    {item.show_name}
                                </p>
                            </NavLink>
                        ))
                    }
                    
                </div>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            new Swiper('.hot-recommend-list',{
                slidesPerView: 'auto',
                // loopedSlides: 5,
            })
        }, 1000);
    }



    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // console.log("getSnapshotBeforeUpdate 在render之后，componentDidUpdate之前调用")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }


    componentWillUnmount() {//组件 卸载 及 销毁 之前直接调用
        console.log("getSnapshotBeforeUpdate 组件装载之后调用")
    }

    static getDerivedStateFromError(error) {//异常处理
        console.log("此生命周期会在渲染阶段后代组件抛出错误后被调用", error)
    }

    componentDidCatch(error, info) {//异常处理
        console.log("后代组件抛出错误后被调用", error, info)
    }


}