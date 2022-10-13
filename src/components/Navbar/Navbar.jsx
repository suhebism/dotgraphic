import React,{useState} from 'react';
import { GiHamburger } from 'react-icons/gi'
import {MdOutlineCancel} from 'react-icons/md';
import './Navbar.scss';
import {motion} from 'framer-motion';



const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <>
    <div className='app__navbar' >
        <div className='app__navbar-logo' >DotGraphic
            <img src="" alt="" />
        </div>
        <ul className='app__navbar-links' >
            <a href="drop" ><li id='drop'>Drops</li></a>
            <a href="about"><li>Market Place</li></a>
            <a href="contact"><li>Creator</li></a>
            <a href="community"><li>Community</li></a>
        </ul>
        <div  className='app__navbar-btn' >
            <button className='custom-btm' >Discover</button>
        </div>
        <div className='app__navbar-smallscreen'>
        <GiHamburger onClick={()=>setToggle(true)} />
        {toggle && (
            <motion.div
            whileInView={{x:[300,0]}}
            transition={{duration:0.85, ease:'easeOut'}}>
                <MdOutlineCancel onClick={()=>setToggle(false)} />
                
                <ul  >
                    <a href="home"><li>Drops</li></a>
                    <a href="about"><li>Market Place</li></a>
                    <a href="contact"><li>Creator</li></a>
                    <a href="community"><li>Community</li></a>
                </ul>
                
                <button className='custom-btm' >Discover</button>
                
            </motion.div>
        )}

    </div>
    </div>
    
    </>
  )
}

export default Navbar