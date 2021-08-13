import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductItem from '../components/productItem'

class shopComp extends Component {
    render () {
        const renderItems = this.props.shopItems.map( (item) => {
            return(<ProductItem  item={item.items} key={item.id} className='slider' imageUrl={item.imageUrl} title={item.title} class='slider' />
             )} )
        return (
            <div className='slider--grid'>
                {renderItems}
                
                </div>
        )
    }
}

const f = state => ({
    
    shopItems:state.shopData

})
export default connect(f)(shopComp)