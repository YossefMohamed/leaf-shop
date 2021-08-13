import React from 'react'
import './form-input.css'

const FormInput = (props) => {



    return (


        <div className='group'>
        
        <input type={props.type} value={props.value} onChange={props.handleonchange} className='form-input' name={props.name} />
        {

            props.label ?
            (<label className={` ${props.value.length ? 'shrink' : ''} form-label`}>

            {props.label}

            </label>):null

        }
        </div>


    )
}
export default FormInput