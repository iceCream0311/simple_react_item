import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router'
import App from './js/App';
import Main from './js/Main'
import Environment from './js/modules//Environment'
import MainHtml from './js/modules//MainHtml'
import Teachers from './js/modules//Teachers'
import Works from './js/modules//Works'
import './css/index.css';
import './css/reset.css';

let setFontSize = () =>{
    let html = document.documentElement;
    let fontSize = html.clientWidth / 16;
    html.style.fontSize = fontSize + 'px';
    document.addEventListener('DOMContentLoaded', setFontSize, false);
}
setFontSize()

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/main" component={Main}>
    <Route path="/environment" component={Environment} />
    <Route path="/teachers" component={Teachers} />
    <Route path="/mainhtml" component={MainHtml} />
    <Route path="/works" component={Works} />
    </Route>
  </Router>
  ),document.querySelector('#root'));
