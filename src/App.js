/*
 * @Author: summer
 * @Date: 2019-08-08 15:03:59
 * @LastEditTime: 2019-08-10 12:40:09
 * @LastEditors: Do not edit
 */
import React, {Component} from 'react'
// import { render } from 'react-dom'

import A from './component/home'
import B from './component/table'
import C from './component/native'
import D from './component/switch'
import E from './component/antd'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {
    let Child
    switch (this.state.route) {
      case '/home': Child = A; break;
      case '/table': Child = B; break;
      case '/native': Child = C; break;
      case '/switch': Child = D; break;
      case '/antd': Child = E; break;
      default:      Child = A;
    }

    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#/home">home</a></li>
          <li><a href="#/table">table</a></li>
          <li><a href="#/native">native</a></li>
          <li><a href="#/switch">switch</a></li>
          <li><a href="#/antd">antd</a></li>
        </ul>
        <Child/>
      </div>
    )
  }
}

export default App;
