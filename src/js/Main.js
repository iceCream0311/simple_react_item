import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import NavLink from './NavLink'
import '../css/Main.css'
import headerLogo from '../images/logo.png';
class Main extends Component {
  render() {
    return (
      <div className="Main">
          <div className="header clear">
            <div className="fl header-logo">
              <img src={headerLogo} />
            </div>
            <ul className="fl header-nav clear">
              <li><NavLink to="/mainhtml">首页</NavLink></li>
              <li><NavLink to="/environment">环境</NavLink></li>
              <li><NavLink to="/Teachers">师资</NavLink></li>
              <li><NavLink to="/works">作品</NavLink></li>
            </ul>
          </div>
          <div id="container">
             {this.props.children}
          </div>
          <ul className='footer clear'>
            <li><span></span>400热线</li>
            <li><span></span><a href="tencent://message/?uin=454034587&Site=www.waps.cn&Menu=no">在线咨询</a></li>
            <li><span></span>微信评画</li>
          </ul>
      </div>
    )
  }
}
export default Main;