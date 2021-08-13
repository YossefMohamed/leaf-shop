import React  from 'react'
import '../components/form/form-input'
import FormInput from '../components/form/form-input'
import Buttoncomp from '../components/form/custom-buttom'
import { auth } from '../firebase/firebase.utils'

import { signInWithGoogle } from '../firebase/firebase.utils'
import SignUp from '../components/signUp'
import './signin.scss'

class SignIn extends React.Component {
    state = {email :'' ,
            password : '',
            currentUser : null
        }

 handleOnChange = (e) => {
    const name = e.target.name
    this.setState({
        [name] : e.target.value
    })
}

handleOnSubmit = async (e) => {
e.preventDefault()
const { email , password } =this.state;
try{
    await auth.signInWithEmailAndPassword(email,password)
    this.setState({email :'',
    password:''
})

}catch(e){
    console.log(e)
}
}
render(){
    return (
        <div className='signinout'>
        <div className='signin'>
            <h2>I already have an account </h2>
            <h6 className='input--header'>Sign In with Your E-Mail</h6>
        <form onSubmit={this.handleOnSubmit}>

        <FormInput value={this.state.email} name='email' handleonchange={this.handleOnChange} type='email' label='Email' />
            <FormInput value={this.state.password} name='password' handleonchange={this.handleOnChange} type='password' label='password' />
            <div className='buttonContanier'> 
            <Buttoncomp type='submit'>
                Sign In
            </Buttoncomp>
            <Buttoncomp onClick={ signInWithGoogle } isGoogleSignIn >
                Sign In With Google
            </Buttoncomp>
            </div>
        </form>
              </div>
              <SignUp />
              </div>
    )}
}
export default SignIn