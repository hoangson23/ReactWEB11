import React, {Component} from 'react'

export default class Header extends Component{
    render(){
        const createHeader = () =>{
            return(
                <div className='nav-bar'>

                </div>
            )
        }
        return(
            <div>
                {createHeader()}
            </div>
        )
    }
}