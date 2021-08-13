import React, { Component } from 'react'
import './checkout.scss'
import { connect } from 'react-redux'
import StripeCheckoutButton from './strip'
import { clearItem , addItem , decreseItem} from '../redux/action'
class checkout extends Component {
    render () {
        console.log(this.props)
        return (
            <div className='checkout-page'>
                <div className='checkout-header'>
                <div className='header-block'>
                <span>Product</span>
                </div>
                <div className='header-block'>
                <span>Info</span>
                </div>
                <div className='header-block'>
                <span>Qantity</span>
                </div>
                <div className='header-block'>
                <span>Price</span>
                </div>
                <div className='header-block'>
                <span>                          &#10005;
</span>
                </div>

                </div>
                    {this.props.cartitems.map((item , index) => {
                    return(<div className='checkot-item' key={index}>
                    <div className='image-container'>
                        <img alt='item' src={item.imageUrl}/>

                    </div>
                    <div className='name'>{item.name}</div>
                    <div className='quantity'>
                    <div className='arrow' onClick={()=>{this.props.decreseItem(item)}}>
                            &#10094;
                            </div>
                       <span className='item-quantity'> {item.quantity} </span>
                        <div className='arrow' onClick={()=>{this.props.addItem(item)}}>
                            &#10095;
                            </div>
                        </div>
                    <div className='price'>${item.price}</div>
                    <div className='remove' onClick={()=>this.props.clearItem(item)}>&#10005;</div>
                    
                </div>

                   )})}
    
                



                <div style={{textAlign:'right',margin:'40px 0px'}}>
        <h2 >Total = ${this.props.quan}</h2>
                </div>
                <StripeCheckoutButton price={this.props.quan} />
            </div>
        )
    }
}

const mapToProps = a =>({
    cartitems : a.cart.cartItems ,
    quan :  a.cart.cartItems.reduce((total ,item) => total + item.quantity * item.price , 0 )

})

export default connect(mapToProps,{
    clearItem,
    addItem,
    decreseItem
})(checkout)