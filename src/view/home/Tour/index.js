import React, { Component } from "react";
import "./index.scss";

export default class Tour extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return null;
    }


    render() {
        const { tourData } = this.props;
        // console.log("tourData😂",tourData);
        // console.log("tourData😂", this.$formatDate);
        return (
            <section className="tour-wrapper">
                {tourData.length && <div className="content-wrapper">
                    <img
                    src={tourData[0].mobile_col_img}
                    alt="" />
                    <div className="right-content">
                        <p className="date">{this.$formatDate(tourData[0].start_time * 1000)} - {this.$formatMonthDay(tourData[0].end_time * 1000)}</p>
                        <h4 className="tour-title overflow-ellipsis-tow">{tourData[0].name}</h4>
                        <p className="price-wrapper">
                            <span className="price">¥ 80</span>
                            <span className="qi">起</span>
                        </p>
                        <div className="city-list">
                            <span className="num">{tourData[0].citys.length}</span>
                            <span className="num-tour">城巡演</span>
                            <p className="city-wrapper">
                                {tourData[0].citys.map((item,idx)=>(
                                    <span className="city" key={item.id}>{item.name} {(idx+1)===tourData[0].citys.length?'':'|'}</span>
                                ))}
                            </p>
                            
                        </div>
                    </div>
                </div>
                }

            </section>
        )
    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        //prevProps和prevState，表示之前的属性和之前的state
        //这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，
        //如果你不想要返回值，可以返回null，此生命周期必须与componentDidUpdate搭配使用
        // console.log("getSnapshotBeforeUpdate 在render之后，componentDidUpdate之前调用")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot
        //第三个参数是getSnapshotBeforeUpdate返回的,如果触发某些回调函数时需要用到 DOM 元素的状态，
        //则将对比或计算的过程迁移至 getSnapshotBeforeUpdate，然后在 componentDidUpdate 中统一触发回调或更新状态
        // console.log("componentDidUpdate")
    }


    componentWillUnmount() {//组件 卸载 及 销毁 之前直接调用
        // console.log("getSnapshotBeforeUpdate 组件装载之后调用")
    }


    static getDerivedStateFromError(error) {//异常处理
        // console.log("此生命周期会在渲染阶段后代组件抛出错误后被调用", error)
    }

    componentDidCatch(error, info) {//异常处理
        // console.log("后代组件抛出错误后被调用", error, info)
    }

}