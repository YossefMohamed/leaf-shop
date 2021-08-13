import React from 'react'
import Home from './pages/Home'
import { hats } from './pages/hats'
import { men } from './pages/men'
import { women } from './pages/women'
import Catagory from './pages/catagory'
import { sneakers } from './pages/sneakers'
import { jackets } from './pages/jackets'
import Shop from './pages/shop'
import checkout  from './pages/checkout'
import { Route , Switch , Redirect } from 'react-router-dom'
import Header from "./components/header/header";
import SignIn from './pages/sign-in';
import { auth , createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from "./redux/action";
class App extends React.Component {
    state={
        currentUser : null
    }

    unsubscribeFromAuth =null
    componentDidMount(){
       this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => 
           {
               if(userAuth)
               {
                   const userRef = await createUserProfileDocument(userAuth)
                   userRef.onSnapshot( snapShot =>{
                     this.props.setCurrentUser({
                              id:snapShot.id,
                               ...snapShot.data()
                           
                       }, 
                           () => {
                             
                       }) 
                   })
               }else{
                   this.props.setCurrentUser(userAuth)
               }
          
    })
}
    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render()
    {
        return (
        <div>
        <Header  />
        <Switch>
        <Route  exact path='/' component={Home} />
        <Route  exact path='/signin' render={ () =>
            this.props.currentUser ? (<Redirect to='/' />):
            (<SignIn />)
        }  />
        <Route  exact path='/hats' component={hats} />
        <Route  exact path='/checkout' component={checkout} />
        <Route  exact path='/men' component={men} />
        <Route  exact path='/women' component={women} />
        <Route  exact path='/sneakers' component={sneakers} />
        <Route  exact path='/jackets' component={jackets} />
        <Route  exact path='/shop' component={Shop} />
        <Route  exact path='/shop/:catId' component={Catagory} />
        </Switch>
        </div>
    )
    }
}

const f = state => ({
    
    currentUser:state.currentUser.currentUser

})


export default connect(
 f,
{
   setCurrentUser 
}

)(App)