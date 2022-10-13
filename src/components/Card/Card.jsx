import React,{useState} from 'react';
import './Card.scss';

const Card = (props) => {
  const [openImages, setOpenImages] = useState()
  return (
    < >
        <div  className='app__card' >
            <div className='app__card-img' onClick={openImages} ><img  src={props.image} alt=""/></div>
            <div>
              <div className='app__card-content'>
                  <span><h5>{props.title}</h5></span>
                  <span><h7>{props.user}</h7></span>
                  <span><h5>{props.price}</h5></span>
              </div>
              <div className=''>

              </div>
            </div>
            <button className='collect-btn' >View</button>
        </div>
    </>
  )
}

export default Card;