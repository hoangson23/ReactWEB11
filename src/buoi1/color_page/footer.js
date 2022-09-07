import React, {Component} from 'react'

export default class Footer extends Component{
    render(){
        const createFooter = () =>{
            return(
                <div className='footer'>

                </div>
            )
        }
        return(
            <div>
                {createFooter()}
            </div>
        )
    }
}