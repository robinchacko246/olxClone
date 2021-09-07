import React, { useState,useContext,Fragment } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { firebaseContext,AuthContext } from '../../store/firebaseContext';
import {useHistory} from 'react-router-dom';

const Create = () => {
  const [name,setName]=useState('');
  const [category,setCategory]=useState('');
  const [price,setPrice]=useState(0);
  const [image,setImage]=useState('');
  const {firebase} = useContext(firebaseContext);
  const {user} = useContext(AuthContext)
  const history=useHistory('');
  console.log(user);
  const handleSubmit=(props)=>{
   
   firebase.storage().ref(`/images/${image.name}`).put(image).then(({ref})=>
    
    {
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({user_id:user.uid,
        name:name,
        category:category,
        price:price,
        image:url,
        date:new Date().toDateString()
       
       
       }).then(()=>{
   
              history.push("/")
         }) 
      })
  
     
             

 
    });
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John" value={name} onChange={(e)=>{setName(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John" value={category} onChange={(e)=>{setCategory(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            <br />
         
          <br />
          {image ? 
          <img alt="Posts" width="200px" height="200px" src={URL.createObjectURL(image)}></img>
           :""
             }
          
            <br />
            <input type="file" onChange={(e)=>{
              setImage(e.target.files[0])
              
              // if (e.target.files[0]) {
              //   //2.
              //   const storageRef = firebase.storage().ref;
              //   //3.
              //   const imageRef = storageRef.child(e.target.files[0].name);
              //   //4.
              //   imageRef.put(e.target.files[0])
              //  //5.
              //  .then(() => {
              //     alert("Image uploaded successfully to Firebase.");
              // });
              // } else {
              //   alert("Please upload an image first.");
              // }
              
            }
              
              } />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
