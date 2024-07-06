import React from 'react';
import './Home.css';
import {useNavigate } from 'react-router-dom';
import Cart from './Cart';
function Home() {
    const navigate = useNavigate();
    const navigateToCart= () => {
        navigate('/cart');
    };

  return (
    <div className="container mt-4">
       
            <img src='https://www.cdnensemble.xyz/pub/media/homepage/topSliders/1/9/19april2024_cr1m.jpg'></img>
      <h1>Welcome to D Shop</h1>
      <p>50% Off for First Order</p>
      <center>
      <button onClick={navigateToCart}>Shop Now</button>
      </center>
      
    </div>
  );
}

export default Home;
