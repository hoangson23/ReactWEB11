import React, {Component} from 'react'

export default class Buoi1 extends Component{
    /* let Test = () => {
        return(
            <div>Hello</div>
        )
        } */
    render(){
        let Test = () => {
            return(
                <div>Hello</div>
            )
        }
        return(
            <div>
                {Test()}
            </div>
        )
    }
}
//có thể gọi tắt bằng cách : gõ rcc + enter
//tên class để làm component (vd: class Buoi1) bắt buộc viết hoa chữ cái đầu
//phương thức giúp chúng ta gọi hàm lên html gọi là : Data bilding : {tên_hàm()}
// nếu khai báo hàm ở ngoài render thì k cần từ khóa khai báo và phải dùng this trong bilding cách này k khuyến khích dùng