import React,{useState} from 'react';
import './Hotdrop.scss';
import Card from '../../components/Card/Card';

const Hotdrop = () => {
    
    const [index, setIndex] = useState(0)
    const projects=[
        {
            title:'',
            imgUrl:''
        }
    ]
  return (
    <div className='app__hotdrop' id='drop' >
        <div className='app__hotdrop-heading'>
            <h7>NFT Marketplace</h7>
            <h1 className=''>Hot Drop 🔥</h1>
        </div>
        <div className='app__hotdrop-sections' >
            <button className={`section-btn ${index === 0 ? "section-active-btn" : null}`} onClick={() => {setIndex(0);}} >EdgeWare</button>
            <button className={`section-btn ${index === 1 ? "section-active-btn" : null}`} onClick={() => {setIndex(1);}}>Polkadot</button>
            <button className={`section-btn ${index === 2 ? "section-active-btn" : null}`} onClick={() => {setIndex(2);}}>EdgeWare</button>
            <button className={`section-btn ${index === 3 ? "section-active-btn" : null}`} onClick={() => {setIndex(3);}}>EdgeWare</button>
            <button className={`section-btn ${index === 4 ? "section-active-btn" : null}`} onClick={() => {setIndex(4);}}>Polkadot</button>
        </div>
        <div  hidden={index !== 0}>{
        projects.map((project,index)=>(
            <div className='app__hotdrop-cards'>
                <Card 
                    Card
                    title='NFT 1'
                    image='https://images.unsplash.com/photo-1561278183-c8edc2be3ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMjkzODkzfHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
                    price='098987'
                    user='@suhebism'/>
                   
                    
                
            </div>
        ))
        }</div>
        <div  hidden={index !== 1}  >{
        projects.map((project,index)=>(
            <div className='app__hotdrop-cards'  >
                <Card 
                    Card
                    title='NFT 2'
                    image='https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
                    price='981237'
                    user='@suhebism'/>
               
            </div>
        ))

        }</div>
        <div  hidden={index !== 2}>{
        projects.map((project,index)=>(
            <div className='app__hotdrop-cards'>
                <Card 
                    Card
                    title='NFT 3'
                    image='https://media.istockphoto.com/photos/portrait-of-beautiful-blonde-woman-with-curly-hairstyle-picture-id490483300?b=1&k=20&m=490483300&s=612x612&w=0&h=WH8_29qdoOqt1P1Om0tuaSTQ0x5JrEqoLEaNAcEX-Lg='
                    price='23874'
                    user='@suhebism'/>
                
            </div>
        ))
        }</div>
        <div  hidden={index !== 3}  >{
        projects.map((project,index)=>(
            <div className='app__hotdrop-cards'  >
                <Card 
                    Card
                    title='NFT 4'
                    image='https://images.unsplash.com/photo-1541514184598-753edc5bef03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzJTIwcGhvdG98ZW58MHx8MHx8&w=1000&q=80'
                    price='986757'
                    user='@suhebism'/>
               
            </div>
        ))

        }</div>
        <div  hidden={index !== 4}  >{
        projects.map((project,index)=>(
            <div className='app__hotdrop-cards'  >
                <Card 
                    Card
                    title='NFT 5'
                    image='https://images.unsplash.com/photo-1616871154417-71fed7335b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHdpdGglMjBoYXR8ZW58MHx8MHx8&w=1000&q=80'
                    price='981237'
                    user='@suhebism'/>
               
            </div>
        ))

        }</div>
    </div>
  )
}

export default Hotdrop