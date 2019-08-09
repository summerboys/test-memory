import React, { Component } from "react";


// import Table from 'bee-table'

// import FormControl from 'bee-form-control';

import { Link } from 'react-router';

const a = Array(1000).fill('a');

class Demo extends Component {
   
  render() {
        return (
            <div>
                <Link to="/wanglongx">test</Link>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <ul style={{
                    width: "100%"
                }}>
                    {a.map(e => {
                        return (
                         <li style={{
                             height: '30px'
                         }}> xxxxxxxxxxxx  </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}
export default Demo