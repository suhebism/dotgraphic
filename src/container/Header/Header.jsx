import React from 'react';
import images from '../../constants/images';
import './Header.scss';

const Header = () => {
  return (
    <>
    <div id='header' className='app__header' >
      <div className='app__header-cards' >
        <div className='app__header-card1' >
          <div className='app__header-stars-positioning1'><img src={images.bluestar} alt="" /></div>
          <h1>Discover</h1>
          <span><img src={images.card1} alt=""/></span>
          <h1>Collect</h1>
          <div className='app__header-stars-positioning2'><img src={images.whitestar} alt="" /></div>
          
        </div>
        <div className='app__header-card2' >
        <div className='app__header-stars-positioning3'><img src={images.whitestar} alt="" /></div>
          <h1>And Sell Rare</h1>
          <span><img src={images.card2} alt="" /></span>
        </div>
        <div className='app__header-card3' >
          <span><img src={images.circle} alt="" /></span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, veritatis est ab corporis tempore suscipit!
          Lorem ipsum dolor sit  veritatis est ab corporis tempore suscipit!
          </p>
          <h1>NFTs</h1>
          <div className='app__header-stars-positioning4'><img src={images.purplestar} alt="" /></div>
        </div>
      </div>
      
    </div>
    <div className='app__header-logos' >
        <img src={images.logo1} alt="" />
        <img src={images.logo2} alt="" />
        <img src={images.logo1} alt="" />
        <img src={images.logo2} alt="" />
        <img src={images.logo1} alt="" />
        <img src={images.logo2} alt="" />
      </div>
    </>
  )
}

export default Header