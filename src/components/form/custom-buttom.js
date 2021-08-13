import React from "react";

import './button.scss'

class Buttoncomp extends React.Component {


    render(){

        return(
            <button type={this.props.type} onClick={ this.props.onClick } className={` ${this.props.isGoogleSignIn? 'googleButton' : '' } customButton`} >

            {this.props.children}

            </button> 
        )

    }

}
export default Buttoncomp