import React , {useState} from 'react'
import Buttoncomp from './form/custom-buttom'
import './cart.scss'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { CartActionType } from '../redux/action'

const CartContainer = (props) => {
    const u ='http://api.mp3quran.net/api/surah?surah=100&language=en';   
    const [url ,setUrl] = useState('a')
    fetch(u).then(res => res.json()).then(res =>console.log(res))
    
     return (
        <div className={`${props.show ? '' : 'show' } cart-cont`}>
            <div className='items'>{
                props.cartitems.length?
           props.cartitems.map(
            item => (
                <div className='cart-item' key={item.id}>
                    <img src={item.imageUrl} alt='item' />
                    <div className='item-content'>
                        <span className='name'>{item.name}</span>
                        <span>{item.quantity} X ${item.price}</span>
                    </div>
                </div>
            ) 

           ): <span className='empty'>{url}</span>
        
        }
            </div>
        <Buttoncomp onClick={()=> 
       { 
         props.history.push('/checkout');
         props.dispatch(CartActionType());
      }
    
    } >Go to CheckOut</Buttoncomp>

        </div>
    )

}
const map = state => ({
    cartitems : state.cart.cartItems ,
    show : state.cart.hidden

})
export default withRouter(connect(map)(CartContainer)) ; 