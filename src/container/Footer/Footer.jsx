import React from 'react';
import {AiFillInstagram,AiFillFacebook,AiFillLinkedin,AiFillTwitterCircle,AiFillGithub} from 'react-icons/ai';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='app__footer'>
        <div className='app__footer-left' >
            <h1>DotGraphic</h1>
            <p>The largest NFT market place. Authentic and truly unique digital creatio. Signed and issued by the creator, made possible by blockchain technology.</p>
            <div className='social-icons' >
                <AiFillInstagram style={{padding:'0 1rem 0 0 '}}/>
                <AiFillFacebook style={{padding:'0 1rem'}}/>
                <AiFillLinkedin style={{padding:'0 1rem'}}/>
                <AiFillTwitterCircle style={{padding:'0 1rem'}}/>
                <AiFillGithub style={{padding:'0 1rem'}}/>
            </div>
        </div>
        <div className='app__footer-right' >
            <div className='sectio-1' >
                <h3>Market Place</h3>
                <h5>Explore</h5>
                <h5>All NFT</h5>
                <h5>Collectibles</h5>
                <h5>Virtual Worls</h5>
            </div>
            <div className='sectio-2' >
                <h3>Resources</h3>
                <h5>Help Centre</h5>
                <h5>Partner</h5>
                <h5>Blog</h5>
                <h5>Docs</h5>
                <h5>Newsltter</h5>
            </div>
            <div className='sectio-3' >
                <h3>Company</h3>
                <h5>About Us</h5>
                <h5>Carrers</h5>
                <h5>Support</h5>

            </div>
        </div>
    </div>
  )
}

export default Footer