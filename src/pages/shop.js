
import React  from 'react'
import { connect } from 'react-redux'
import shopComp from "./shop.comp";
import Catagory from "./catagory";
import { Route } from "react-router-dom";
import '../components/productitem.scss' ;

class Shop extends React.Component {
    
    render(){
        console.log(this.props)
        return(
           <>
            <Route  path={`${this.props.match.path}`} component={shopComp} />
            
           </>
        )
    }

}


const f = state => ({
    
    shopItems:state.shopData

})


export default connect(f)(Shop)

