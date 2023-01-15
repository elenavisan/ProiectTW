import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSection.css';

function HomeSection() {
  return (
    <div className='home-container'>
      <img src='food3.jpg'/>
      <h1>WELOCOME TO THE FOOD WASTE APP</h1>
      <p>Get started!</p>
      <div className='home-btns'>
      <Link className="btns btn--outline btn--large" to="/LoginPage">LOGIN TO YOUR ACCOUNT</Link>
      <Link className="btns btn--primary btn--large " to="/MyFridge/AddAliment">BUILD YOUR FRIDGE</Link>
      </div>
    </div>
  );
}

export default HomeSection;