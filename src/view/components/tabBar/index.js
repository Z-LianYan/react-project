

import React, { Component } from 'react'
import './index.scss'

import { TabBar } from 'antd-mobile';

import Logo from "../../../static/images/logo.png"

class TabBarCom extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'redTab',
        hidden: false,
        fullScreen: true,
      };
    }
  
    render() {
      return (
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: '100%' }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#000"
            barTintColor="white"
            hidden={this.state.hidden}
            tabBarPosition="bottom"
          >
            <TabBar.Item
              title="首页"
              key="home"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${require("../../../static/images/logo.png")}) center center /  21px 21px no-repeat` }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://m.juooo.com//static/img/tab_icon_home_selected.3d60fa8.png) center center /  21px 21px no-repeat' }}
              />
              }
              selected={this.state.selectedTab === 'blueTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
              data-seed="logId"
            >
              <img src={require("../../../static/images/logo.png")} alt=""/>
              {/* {this.renderContent('Life')} */}666
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                />
              }
              title="剧院"
              key="heater"
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}
              data-seed="logId1"
            >
              {/* {this.renderContent('Koubei')} */}555
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                />
              }
              title="票夹"
              key="ticketFolder"
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'greenTab',
                });
              }}
            >
              {/* {this.renderContent('Friend')} */}333
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="我的"
              key="mine"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
              }}
            >
              {/* {this.renderContent('My')} */}123
            </TabBar.Item>
          </TabBar>
        </div>
      );
    }
  }


export default TabBarCom;