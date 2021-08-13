import { combineReducers } from 'redux';
import { CheckCart , decrease } from './reducer'
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import SHOP_DATA from '../pages/shop.data'
const user = ( state=null , action ) => {

switch (action.type) {
    case 'SET_CURRENT_USER':
        return ( {...state ,
         currentUser : action.payload})

    default:
    return ( {...state})
}}

const intial_state = {hidden : false
,
cartItems : []
}

export const cartReducer = ( state= intial_state , action ) => {

switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
        return ( {...state ,
            hidden : !state.hidden})
    case 'ADD_ITEM':
        return ( {...state ,
            cartItems : CheckCart(state.cartItems , action.payload)
        }
        
        )
    case 'CLEAR_ITEM':
        return ( {...state ,
            cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        }
        
        )
    case 'DEC_ITEM':
        return{
            ...state ,
            cartItems : decrease(state.cartItems , action.payload)
        }
    default:
    return ( {...state})
}

}
const data = (state = SHOP_DATA , action) => {
    return[
        ...state
    ]
}
const persistConfig = {
    key: 'root',
    storage,
    

}
const rootReducer = combineReducers({
    currentUser : user ,
    cart : cartReducer,
    shopData : data

})

export default persistReducer(persistConfig, rootReducer)

