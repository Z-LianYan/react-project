import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


import { Home, Mine, Theater } from "./view";



import AppFooter from "./view/components/AppFooter/index";




class App extends Component {
  	constructor(props) {
		super(props)
		this.state = {
			//			hasFooter:true
		}
	}

  	//判断是否显示AppFooter组件
	renderFooter() {
		//因为只要路由变化，属性就会变化，就会重新render，就会执行这个函数
		let { pathname } = this.props.location
		let no_footer_pathnames = ['/mine/login']
		if (no_footer_pathnames.indexOf(pathname) > -1) return ''
		return <AppFooter />
  	}
  

  	renderRoute() {
		let { routes } = this.props
		return (
			<Switch>
				{routes.map(item => <Route key={item.id}
					path={item.path} component={item.component} exact={item.exact} />)}
			</Switch>
		)
	}


  render(){
    return (
      <div className="App">
        {this.renderRoute()}
        {this.renderFooter()}
      </div>
    )
  }
}




App.defaultProps = {//不需要更改的放这里
	routes: [
		{ id: 1, path: '/', component: Home, exact: true },
		{ id: 2, path: '/theater', component: Theater },
		{ id: 3, path: '/mine', component: Mine }
	]
}

export default withRouter(App);