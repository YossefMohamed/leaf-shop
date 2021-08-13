import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem } from "../redux/action";
import './cat.scss'
class Catagory extends Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <div className='cat--cont'>
                    {this.props.shop[0].items.map((item,i) => {
                    return (
                            <div key={item.id} className= {`card card--${i}`}  >
                                <div className='card--pic' style={{
                                backgroundImage: `URL(${item.imageUrl})`,
                                backgroundRepeat : 'no-repeat' ,
                                backgroundSize : 'cover' ,
                                backgroundPosition : 'center',
                                position : "relative"}}>
                                            <button className='adding' onClick ={() => this.props.addItem(item)}>
                                                Add to  cart
                                            </button>
                                </div>
                                <div className='flex' style={{display : 'flex' ,justifyContent : 'space-between', padding :' 0 5px'}}>
                                <div>  {item.name} </div>
                                <div>  {`${item.price} $`} </div>

                                </div>

                            </div>
                    )

                })
                }
                </div>
            </div>
        )
    }
}
const maps = (state , prevProps) => ({
    shop :state.shopData.filter(item => item.routeName == prevProps.match.params.catId)
})

export default connect(maps,{
    addItem
})(Catagory)