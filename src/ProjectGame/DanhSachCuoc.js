import React, { Component } from 'react';
import { connect } from 'react-redux';
class DanhSachCuoc extends Component {
    renderDanhSachCuoc = () => {
        return this.props.danhSachCuocs.map((quanCuoc, index) =>{
            return (
                <div className='col-4 mt-2' key={index}>
                    <img src={quanCuoc.hinhAnh}/>
                    <br/>
                    <span style={{fontSize:"50px", color:"red",textAlign:"center"}}>
                        {quanCuoc.diemCuoc}
                    </span>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderDanhSachCuoc()}
                </div>
            </div>
        );
    }
}


// hàm lấy data state từ trong kho ra: mapStateToProps. đặt tên tùy mình
 const mapStateToProps = (state) => {
    return {
        //ten gia tri: lay du lieu tu trong kho
        danhSachCuocs: state.bauCuaTomCaReducer.danhSachCuoc
        //bien tu dat
    }
}
export default connect(mapStateToProps,null) (DanhSachCuoc)