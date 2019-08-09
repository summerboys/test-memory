import React, { Component } from 'react'

import { Link } from 'react-router'

class A extends Component {
    constructor(props){
        super(props)
        this.state = {
            flag: false,
            arr: Array(1000).fill('a')
        }
    }
    showHandle = () => {
        this.setState({
            flag: true
        })
    }
    hideHandle = () => {
        this.setState({
            flag: false
        })
    }
    render (){
        return (
            <div>
                <Link to="/wanglongx">test</Link><br></br>
                <button onClick={this.showHandle}>show</button>
                <button onClick={this.hideHandle}>hide</button><br></br>
                <input></input>
                <ul>
                    {this.state.flag && this.state.arr.map(e => {
                        return <li>aaaaaaaaaaaaaaaaaaaaa</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default A