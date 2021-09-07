import React,{useContext,useEffect, useState} from 'react';
import { firebaseContext,AuthContext } from '../../store/firebaseContext';
import Heart from '../../assets/Heart';
import './Post.css';

function Posts() {
  const [products,setProducts]=useState([]);
  const {firebase} = useContext(firebaseContext);

  


  useEffect(() => 
  
  {
 
   firebase.firestore().collection('products').get().then((snapshot)=>{
          const allPost=snapshot.docs.map((product)=>{

            return {...product.data(),id:product.id}
            ///setProducts(product);
          })
     
      console.log("allposts",allPost);
    setProducts(allPost);
      
   });
  }, [])
  console.log("producst state",products);
  
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

         {
           
           products.map(post=>{
           
            return <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={post.image} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {post.price}</p>
              <span className="kilometer">{post.category}</span>
              <p className="name"> {post.name}</p>
            </div>
            <div className="date">
              <span>{post.date ? post.date :""}</span>
            </div>
          </div>



           })
         
    
                        
        
         

          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
