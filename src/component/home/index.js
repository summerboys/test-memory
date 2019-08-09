import React  from 'react';

import { Link } from 'react-router'

export default function b (){
    return (
        <div>
            <Link to="/table"> bee-table </Link><br></br>
            <Link to="/native"> native </Link><br></br>
            <Link to="/switch">switch</Link><br></br>
            <Link to="/antd">antd</Link>
        </div>
    )
}