/*
 * @Author: summer
 * @Date: 2019-08-07 14:26:26
 * @LastEditTime: 2019-08-10 13:19:59
 * @LastEditors: Do not edit
 */
import React, { Component } from "react";


import Table from 'bee-table'

// import FormControl from 'bee-form-control';

// import { Link } from 'react-router';

require('bee-table/build/Table.css')
require('bee-form-control/build/FormControl.css')
var Mock = require('mockjs')
var Random = Mock.Random
var  TableData = Mock.mock({
    'arr|10':[{
        key: () => Random.integer(1,10000000000),
        name: () => Random.cname(),
        address: () => Random.county(true)
    }]
})

TableData = TableData.arr

const columns8 = [
  { title: "姓名1", dataIndex: "name", key: "a" },
  { title: "姓名2", dataIndex: "name", key: "a2" },
  { title: "姓名3", dataIndex: "name", key: "a3" },
  { title: "姓名4", dataIndex: "name", key: "a4" },
  { title: "姓名5", dataIndex: "name", key: "a5" },
  { title: "姓名6", dataIndex: "name", key: "a6" },
  { title: "姓名7", dataIndex: "name", key: "a7" },
  { title: "姓名8", dataIndex: "name", key: "a8" },
  { title: "姓名9", dataIndex: "name", key: "a9" },
  { title: "姓名10", dataIndex: "name", key: "a0" },
  { title: "姓名11", dataIndex: "name", key: "ae" },
  { title: "姓名12", dataIndex: "name", key: "a33veve" },
  { title: "姓名13", dataIndex: "name", key: "aveveve" },
  { title: "姓名14", dataIndex: "name", key: "avev" },
  { title: "姓名15", dataIndex: "name", key: "aww" },
  { title: "姓名16", dataIndex: "name", key: "aSSS" },
  { title: "姓名17", dataIndex: "name", key: "aDDD" },
  { title: "姓名18", dataIndex: "name", key: "aVV" },
  { title: "姓名19", dataIndex: "name", key: "aBB" },
  { title: "姓名20", dataIndex: "name", key: "aNN" },
  { title: "姓名21", dataIndex: "name", key: "aMM" },
  { title: "姓名22", dataIndex: "name", key: "aBVB" },
  { title: "姓名23", dataIndex: "name", key: "FEEFEFE" },
  { title: "姓名24", dataIndex: "name", key: "VDVa" },
  { title: "姓名25", dataIndex: "name", key: "Sa" },
  { title: "姓名26", dataIndex: "name", key: "Wa" },
  { title: "姓名27", dataIndex: "name", key: "Ba" },
  { title: "姓名28", dataIndex: "name", key: "Qa" },
  {title: "id", dataIndex: "key", key: "QQb"},
  { title: "地址", dataIndex: "address", key: "BBc"},
];


let start,end
class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: TableData
        };
    }

    componentWillMount(){
        start = new Date().getTime()
        console.log('start willMount', start);
        
    }
    componentDidMount(){
        end = new Date().getTime()
        console.log('end DidMount', end)
        console.log('render time', Number(end) - Number(start) )
    }
    //dragborder={true}
  render() {
        return (
            <div>
                {/* <Link to="/wanglongx">bee-table</Link> */}
                {/* <FormControl></FormControl> */}
                <input />
                <Table columns={columns8} data={this.state.data} />
            </div>
        );
    }
}
export default Demo