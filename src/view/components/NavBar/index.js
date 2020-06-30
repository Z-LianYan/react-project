import React,{ Component } from "react";
import "./index.scss";

import { NavBar, Icon } from 'antd-mobile';

import { NavLink } from 'react-router-dom';

export default class Templates extends Component{
    constructor(props){
        super(props);
        this.state = {
            leftTitle:this.props.leftTitle,//左边标题
            rightTitle:this.props.rightTitle,//右边标题
            href:this.props.href || ''
        }
    }

    render(){
        return (
            <div>
                <NavBar
                mode="light"
                leftContent={this.state.leftTitle}
                rightContent={[
                    this.state.href && <NavLink key="1" className="nav-link" to={this.state.href}>
                        {this.state.rightTitle} <Icon key="1" type="right" />
                    </NavLink>,
                ]}
                />
            </div>
            
        )
    }

    componentDidMount(){
    }


}