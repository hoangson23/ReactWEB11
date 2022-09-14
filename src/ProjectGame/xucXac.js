import React, { Component } from 'react';
import { connect } from 'react-redux';
class XucXac extends Component {
    renderXucXac = () =>{
        return this.props.xucXac.map((item, key) =>{
            return <img key={key}
            src={item.hinhAnh}
            style={{width:'50px'}} />
        })
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        {this.renderXucXac()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        xucXac: state.bauCuaTomCaReducer.xucXac,
        tongTien: state.bauCuaTomCaReducer.tongTien,
    }
}
export default connect(mapStateToProps, null)(XucXac)