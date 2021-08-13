import React, { Component } from 'react'
import './cart-icon.scss'
import {ReactComponent as ShoppingBag} from './shopping-bag-solid.svg'
import CartContainer from './cart-container'
import { connect } from 'react-redux'
import { CartActionType } from '../redux/action'

class CartIcon extends Component {
   
    render () {
              return (
          <div className='cart-icon' >
               <div onClick={this.props.CartActionType} >  <ShoppingBag className='Bag'  />
               </div>
            <span className={`${this.props.quan?'': 'alert'} quan`} onClick={this.props.CartActionType} >{this.props.quan}</span>
            <CartContainer />
             </div>
        )
    }
}
const mapToProps = state =>({
    cartitems : state.cart.cartItems ,
    show : state.cart.hidden ,
    quan :  state.cart.cartItems.reduce((total ,item) => total + item.quantity , 0 )

})
export default connect(mapToProps,{ CartActionType })(CartIcon)