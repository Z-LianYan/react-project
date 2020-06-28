import React,{ Component } from "react";
import "./index.scss";

import { NavLink } from 'react-router-dom';

export default class Classify extends Component{
    constructor(props){//构造函数，最先被执行,通常在构造函数里初始化state对象或者给自定义方法绑定this
        super(props);
        this.state = {

        }
    }

    static getDerivedStateFromProps(nextProps, prevState){//挂载更新都会执行 (必须返回一个有效的状态对象(或null))
        return null;
    }

    itemRender(){
        const { classifyList } = this.props;

        const classifyData = [];

        classifyList.forEach(item=>{
            if(item.category_id){
                classifyData.push(item);
            }
        })

        return classifyData.map( item =>(
            <NavLink to={item.url} key={item.id}>
                <img src={item.pic} alt="" />
                {item.name}
            </NavLink>
        ))

    }

    render(){
        return (
            <section className="classify-wrapper padding-trl">
                
                {this.itemRender()}

            </section>
        )
    }

    componentDidMount(){
    }



    shouldComponentUpdate(nextProps, nextState){//nextProps新的属性 和 nextState变化之后的state
        //返回一个布尔值 true表示会触发重新渲染，false表示不会触发重新渲染，
        //默认返回true,我们通常利用此生命周期来优化React程序性能
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){//prevProps和prevState，表示之前的属性和之前的state
        //这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，
        //如果你不想要返回值，可以返回null，此生命周期必须与componentDidUpdate搭配使用
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        //参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot
        //第三个参数是getSnapshotBeforeUpdate返回的,如果触发某些回调函数时需要用到 DOM 元素的状态，
        //则将对比或计算的过程迁移至 getSnapshotBeforeUpdate，然后在 componentDidUpdate 中统一触发回调或更新状态
    }
    


    
    componentWillUnmount(){//组件 卸载 及 销毁 之前直接调用
    }


    
    static getDerivedStateFromError(error){//异常处理
    }

    componentDidCatch(error,info){//异常处理
    }


}