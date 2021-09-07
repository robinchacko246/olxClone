import React,{useState,useContext} from 'react';

import Logo from '../../olx-logo.png';
import { firebaseContext } from '../../store/firebaseContext';
import './Signup.css';
import {useHistory} from 'react-router-dom';


export default function Signup() {
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const {firebase}=useContext(firebaseContext)
  const history=useHistory('');

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    console.log(result);
    result.user.updateProfile({displayName:username}).then(()=>
    {
       firebase.firestore().collection('users1').add({id:result.user.uid,
        username:username,
        phone:phone}).then(()=>{

             history.push("/login")
        })  
    })
  })
  .catch((error) => {
  
    
  });

    // firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    // result.user.updateProfile({displayname:username})
    // })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John" value ={username}  onChange={(e)=>{console.log('value e',e.target.value);
          
          setUsername(e.target.value)
          }}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John" value ={email}  onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"  value ={phone} onChange={(e)=>{setPhone(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe" value ={password} onChange={(e)=>{setPassword(e.target.value)}}
          />
          <br />
          <br />
          <button >Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
