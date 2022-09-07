import React, {Component} from 'react'

export default class Body  extends Component{
    render(){
        const createBody = () =>{
            return(

            <div className='container'>
                <div className='left'></div>
                <div className='right'></div>
            </div>
            )
        }
        return(
            <div>
                {createBody()}
            </div>
        )
    }
}