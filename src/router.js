import React from 'react';

import { Router, Route, hashHistory  } from 'react-router';

import A from './component/home'
import B from './component/table'
import C from './component/native'
import D from './component/switch'
import E from './component/antd'

export default (
    <Router history={hashHistory}>
        <Route path="/wanglongx" component={A}></Route>
        <Route path="/table" component={B}></Route>
        <Route path="/native" component={C}></Route>
        <Route path="/switch" component={D}></Route>
        <Route path="/antd" component={E}></Route>
    </Router>
)

