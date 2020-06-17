import React,{ Component } from "react";
import "./index.scss";

import { NavLink } from 'react-router-dom';

export default class Classify extends Component{
    constructor(props){//构造函数，最先被执行,通常在构造函数里初始化state对象或者给自定义方法绑定this
        console.log("构造函数，最先被执行")
        super(props);
        this.state = {
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){//挂载更新都会执行 (必须返回一个有效的状态对象(或null))
        console.log("getDerivedStateFromProps 是个静态方法,当我们接收到新的属性想去修改我们state")
        return null;
    }

    itemRender(){
        const { classifyList } = this.props;

        console.log("12346579哈哈哈😄",classifyList);



        return classifyList.map( item =>(
            <NavLink to={item.url}   key={item.id}>
                {item.name}
            </NavLink>
        ))

    }




    render(){
        return (
            <section className="classify-wrapper">
                
                {this.itemRender()}

            </section>
        )
    }

    componentDidMount(){
        console.log("componentDidMount 组件装载之后调用")
    }



    shouldComponentUpdate(nextProps, nextState){//nextProps新的属性 和 nextState变化之后的state
        //返回一个布尔值 true表示会触发重新渲染，false表示不会触发重新渲染，
        //默认返回true,我们通常利用此生命周期来优化React程序性能
        console.log("shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){//prevProps和prevState，表示之前的属性和之前的state
        //这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，
        //如果你不想要返回值，可以返回null，此生命周期必须与componentDidUpdate搭配使用
        console.log("getSnapshotBeforeUpdate 在render之后，componentDidUpdate之前调用")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        //参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot
        //第三个参数是getSnapshotBeforeUpdate返回的,如果触发某些回调函数时需要用到 DOM 元素的状态，
        //则将对比或计算的过程迁移至 getSnapshotBeforeUpdate，然后在 componentDidUpdate 中统一触发回调或更新状态
        console.log("componentDidUpdate")
    }
    


    
    componentWillUnmount(){//组件 卸载 及 销毁 之前直接调用
        console.log("getSnapshotBeforeUpdate 组件装载之后调用")
    }


    
    static getDerivedStateFromError(error){//异常处理
        console.log("此生命周期会在渲染阶段后代组件抛出错误后被调用",error)
    }

    componentDidCatch(error,info){//异常处理
        console.log("后代组件抛出错误后被调用",error,info)
    }


}