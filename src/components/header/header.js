import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from "react-redux";
import CartIcon from '../cart-icon'
import './header.scss'

class Header extends Component {
    render () {
        console.log(this.props.currentUser)
        return (
            <div className='header'>
                <div className='header__left'>
                <Link to='/' >
                <i className="fas fa-leaf" style={{fontSize : '2rem'}}></i>
                </Link>
            </div>
                <div className='header__right'>
                <Link to='/' className='option' >
                   HOME
                </Link>
                <Link to='/shop' className='option' >
                   SHOP
                </Link>
                {
                    this.props.currentUser?
                    (<div className='option' onClick={() => auth.signOut()}  
                    style={{cursor : 'pointer'}}>
                    SIGN OUT</div>)
                    :
                    (<Link className='option' to='/signin'>
                        SIGN IN
                    </Link>)
                }
                
            <CartIcon />
        
            </div>
           
            </div>
        )
    }
}
const map = (state) => ({
    currentUser : state.currentUser.currentUser 
})

export default connect(map)(Header)