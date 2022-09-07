import React, { Component } from 'react';
import anh1 from './assets/anh1.jpg'
import anh2 from './assets/anh2.jpg'
import anh3 from './assets/anh3.jpg'
import Child from './child';
class Buoi3 extends Component {
    listArray = {
        mangSP: [
            {maSP: 1, tenSP: "Ip X", gia:  100, hinhAnh: anh1},
            {maSP: 2, tenSP: "Ip Xs", gia:  100, hinhAnh: anh2},
            {maSP: 3, tenSP: "Ip 11", gia:  100, hinhAnh: anh3},
            {maSP: 14, tenSP: "Ip 12", gia:  100, hinhAnh: anh3},
        ]
    }
    //props: chuyền dữ liệu thông qua các component
    render() {
        return (
            <div>
                <Child listArrays = {this.listArray}/>
            </div>
        );
    }
}

export default Buoi3;