import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props){
        //ham khoi tao
        super(props)
        this.state = { color:"green"}
    }
    componentDidMount(){
        console.log("componentDidMount  đã chạy");
    }
    //componentDidMount chayj trước componentDidMount tr giao diện, call axios
    componentWillUnmount(){
        console.log("componentWillUnmount  đã chạy");
    }
    //componentWillUnmount Chayj cuối tr giao diện, để hủy, xóa
    componentWillMount(){
        console.log("componentWillMount  đã chạy");
    }
    //componentWillMount xhayj đầu tiên, update
    render() {
        return (
            <div>
                <button onClick={() => this.setState({color: "aaaaa"})}>
                    submit
                </button>
                <p>
                    {this.state.color}
                </p>
            </div>
        );
    }
}

export default LifeCycle;