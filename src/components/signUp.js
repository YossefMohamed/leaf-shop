import React, { Component } from 'react'
import FormInput from '../components/form/form-input' 
import Buttoncomp from '../components/form/custom-buttom'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'
import './signup.scss'
class SignUp extends Component {
    state ={
        displayName : '',
        email : '',
        password: '',
        confirmPassword: ''
    }

    handleSubmit =async event => {
        event.preventDefault();
        const {displayName , email ,password ,confirmPassword}=this.state
        if(password !== confirmPassword){
            alert('Password Donnt Match')
            return
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email ,password)
            await createUserProfileDocument(user , {displayName})
            this.setState({
                displayName : '',
                email : '',
                password: '',
                confirmPassword: ''
            })
        }catch(e){
            console.log(e)
        }
    }

    handleChange = e => {
        const { name ,value}  = e.target;
        this.setState({ [name] : value })
    }

    

    render () {

        const {displayName , email ,password ,confirmPassword}=this.state
        return (
            <div className='sign-up'>
            <h2 className='title'>
                I do not  have an account
            </h2>
            <span>Sign up with you email an passwordd</span>
            
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
            type='text'
            name='displayName'
            label='UserName'
            value={displayName}
            handleonchange={this.handleChange}
            />
            <FormInput
            type='email'
            name='email'
            value={email}
            label='email'

            handleonchange={this.handleChange}
            />
            <FormInput
            type='password'
            name='password'
            value={password}
            label='password'
            handleonchange={this.handleChange}
            />
            <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='confirm Password'
            handleonchange={this.handleChange}
            />

            <Buttoncomp type='submit'>Sign Up</Buttoncomp>
            </form>
            </div>
        )
    }
}

export default SignUp