import React from 'react';
import { withRouter } from 'react-router-dom'
const HomeItem = (props) => {

    const styleItem ={backgroundImage:` URL(${props.imageUrl})`,
     backgroundRepeat : 'no-repeat' ,
      backgroundSize : 'cover' ,
       backgroundPosition : 'center',
       height :'100%',
       width:'100%',
       position: 'absolute',
    top: '0',
    right: '0'
    
       
    }
    return(

    <div className={'item item-'+props.id} onClick={()=>props.history.push(`${props.match.url}shop/${props.type}`)}>
        <div className='backGrond'style={styleItem}>
        </div>
    <div className='text-box'>   

    <h2 className='title'>{props.type}</h2>
    <h6>Shope Now</h6>

   
    </div>

    </div>
)

}
export default withRouter(HomeItem) ;