import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { AuthContext, firebaseContext } from './store/firebaseContext';
import Create from './Components/Create/Create';

function App() {
  const {user,setUser} =useContext(AuthContext);
  const {firebase}=useContext(firebaseContext);
  useEffect(() => {
   firebase.auth().onAuthStateChanged((user)=>
   {
setUser(user);
console.log("username",user);
   })
  }, [])
  return (
    <div>
      <Router>

        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={Signup}/>     
        <Route exact path='/login' component={Login}/>     
        <Route exact path='/create' component={Create}/> 
      </Router>

    </div>
  );
}

export default App;
