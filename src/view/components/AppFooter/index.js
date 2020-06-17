

import React, { Component } from 'react'
import './index.scss'

import { NavLink } from 'react-router-dom';



class AppFooter extends Component{
	
	renderNav(){
		let { navs } = this.props
		return navs.map( item => (
			<NavLink exact={item.exact} activeClassName='actived' to={item.path} key = {item.id}>
				<i className={item.icon}></i>
				<span>{item.title}</span>
			</NavLink>
		))
		
	}
	
	render(){
		return (
			<footer className='app-footer-nav'>
				{this.renderNav()}
			</footer>
		)
	}
	
}

AppFooter.defaultProps = {
	navs:[
		{id:1,path:'/',title:'首页',icon:'home', exact:true},
		{id:2,path:'/theater',title:'剧院',icon:'theater'},
		{id:4,path:'/mine',title:'我的',icon:'mine'}
	]
}


export default AppFooter