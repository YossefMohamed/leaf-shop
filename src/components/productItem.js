import React from 'react';
import './productitem.scss' ;
import { connect } from 'react-redux'
import { addItem } from '../redux/action' 
 const ProductItem = (props) =>{
    console.log(props)
    return (
        
           <div>


            <h2 className='slider--header'>{props.title}</h2>
                <div className={`${props.class}`}>

                { props.item.filter((item , idw) => idw < 4 ).map( (item , i) => {return (  
                <div key={item.id} className= {`card card--${i}`}  >
                <div className='card--pic' style={{
                backgroundImage: `URL(${item.imageUrl})`,
                backgroundRepeat : 'no-repeat' ,
                backgroundSize : 'cover' ,
                backgroundPosition : 'center',
                position : "relative"}}>
                            <button className='adding' onClick ={() => props.addItem(item)}>
                                Add to  cart
                            </button>
                </div>
                <div className='flex' style={{display : 'flex' ,justifyContent : 'space-between', padding :' 0 5px'}}>
                <div>  {item.name} </div>
                <div>  {`${item.price} $`} </div>

                </div>

                </div> )})}

                </div>




           </div>
           )
        }
export default connect(null , 
        {addItem}
    )(ProductItem);