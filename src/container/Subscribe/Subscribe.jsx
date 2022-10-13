import React,{useState} from 'react';
import './Subscribe.scss';

const Subscribe = () => {
    const handleMessage=()=>{
        setMessage('Thanks for Subscribing!')
    }
    const [message, setMessage] = useState('Never Miss a drop')
  return (
    <div className='app__subscribe' >
        <div className='app__subscribe-content' >
            <h2>{message}</h2>
            <p>Subscribe to our super-exclusive drop list and be the first to know about upcoming luval drops</p>
            <div className='app__subscribers-btn'>
                <span><input type="text" placeholder='enter your email address' /></span>
                <span><button className='custom-btm' onClick={handleMessage} >Subscribe</button></span>
            </div>
        </div>
    </div>
  )
}

export default Subscribe