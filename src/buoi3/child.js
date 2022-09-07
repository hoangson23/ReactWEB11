import React, { Component } from 'react';

class Child extends Component {
    state ={
        img: this.props.listArrays.mangSP[3].hinhAnh
    }
    changeImg = (imgs) => {
        return(
            this.setState({
                img: imgs
            })
        )
    }
    render() {
        // console.log(this.props.listArrays);
        //state full: co 2 cach lay du lieu
        //cach 1:
        // let fatherProps = this.props.listArrays
        // console.log(fatherProps);
        //cach 2: drtrucuring
        let{listArrays}= this.props
        //console.log(listArrays);
        //
        return (
            <div className='row'>
                <div className='col-6'>
                    <img src={this.state.img} style={{width:300, height: 300}} />
                </div>
                <div className='col-6'>
                    {listArrays.mangSP.map((item, index) => {
                        return(
                            // <div key={index} className='col-6'>
                            //     {/* dungf map phai co key */}
                            //     <img src={item.hinhAnh} style={{width:300, height: 300}}/>
                            //     <h1>{item.maSP}</h1>
                            //     <h2>{item.tenSP}</h2>
                            //     <h3>{item.gia}</h3>
                            //</div>
                            <button key={index} onClick={()=> this.changeImg(item.hinhAnh)}>
                                <img src={item.hinhAnh} style={{width:300, height: 300}} />
                            </button>
                                
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Child;
//sự khác nhau giữa state và props