import React,{ Component } from "react";
import "./index.scss";

// import { NavBar, Icon } from 'antd-mobile';

export default class Templates extends Component{
    constructor(props){
        super(props);
        this.state = {
            rightTitle:this.props.rightTitle
        }
    }

    render(){
        return (
            <div>MyNavBar</div>
            // <NavBar
            // mode="light"
            // leftContent="热门演出"
            // rightContent={[
            //     <div>
            //         {this.state.rightTitle} <Icon key="1" type="right" />
            //     </div>,
            // ]}
            // />
        )
    }

    componentDidMount(){
    }


}