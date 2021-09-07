import React,{useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../../store/firebaseContext';


function Header(props) {
  const history=useHistory('');
  const {user} = useContext(AuthContext);

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        <span>
          {
          
          user.displayName? "Welcome to "+user.displayName :"LOGIN"
        
        }
         </span>
          <hr />
        </div>

        <div className="sellMenu">
          <SellButton ></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus ></SellButtonPlus>
            
            <span onClick={(e)=>{

              if(user)
              {
                history.push("/create")
              }
               
              else
              {
                alert("please login")
              }

            }
            }>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
