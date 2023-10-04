import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contact.css'


const Contact = () => {
    React
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [info, setInfo] = useState();
  return (
    <div>
        <Navbar/>
        <div className='contactContainer'>
        <div className='contactHeader'>
            <h1>Contact Us</h1>

        </div>
        <div className='contactMain'>

<input type="email" placeholder='okeezzy@gmail.com' value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
<input type="password" placeholder='12345'value={password} onChange={(e) => {setPassword(e.target.value)}} />
<input type="text" placeholder='start typing...' value={info} onChange={(e) => {setInfo(e.target.value)}} />
<button>Submit</button>
<div className='content'>
    <p>Email: {email}</p>
    <p>Password: {password}</p>
    <p>Message: {info}</p>

</div>
        </div>

        </div>
        
        <Footer/>
        
        </div>
  )
}

export default Contact