import React,{ Component } from "react";
import "./index.scss";

import { Carousel } from 'antd-mobile';
import { NavLink } from 'react-router-dom';



export default class Templates extends Component{
    constructor(props){//构造函数，最先被执行,通常在构造函数里初始化state对象或者给自定义方法绑定this
        console.log("构造函数，最先被执行")
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){//挂载更新都会执行 (必须返回一个有效的状态对象(或null))
        console.log("getDerivedStateFromProps 是个静态方法,当我们接收到新的属性想去修改我们state")
        return null;
    }


    render(){
        console.log("render函数是纯函数",this.props.slideshowList)
        console.log("render函数是纯函数----呵呵呵呵呵",this.state.slideshowList)

        const slideshowList = [];
        this.props.slideshowList.forEach( item => {
            if(item.url.indexOf("ticket")!==-1){
                slideshowList.push(item);
            }
        })

        console.log("----录播",slideshowList);

        return (
            <section className="slideshow-wrapper padding-rl">
                <Carousel
                autoplay={true}
                autoplayInterval={3000}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                {slideshowList.map((val,index) => (
                    <NavLink
                    key={index}
                    to="/">
                    <img
                        src={val.image_url}
                        alt=""
                        onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            console.log("图片加载")
                        }}
                    />
                    </NavLink>
                ))}
                </Carousel>
            </section>
        )
    }

    componentDidMount(){

        console.log("componentDidMount 组件装载之后调用")


        // simulate img loading

        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
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







    // componentWillMount(){//被废弃(但并未删除)官方计划在17版本完全删除 
    //     //如果和 getDerivedStateFromProps 同时存在会报错
    //     console.log("componentWillMount")
    // }

    // componentWillReceiveProps(){//被废弃(但并未删除)官方计划在17版本完全删除
    //     console.log("componentWillReceiveProps")
    // }

    // componentWillUpdate(){//被废弃(但并未删除)官方计划在17版本完全删除
    //     console.log("componentWillUpdate")
    // }


}