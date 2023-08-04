import  React  from 'react';
import './Hero.css'
import Crypto  from '../assets/hero-img.png'


const Hero =() =>{
    return(
        <div className='hero'>
            <div className='container'>

                {/*left side */}
                <div className='left'>
                    <p>Buy & Sell Crypto 24/7 using  your retirement account </p>
                    <h1>Invest  in Cryptocurreny with Your BITCI </h1>
                    <p>Buy, Sell, and Store hundreds of Cryptocurrencies</p>
                    <div className='input-container'>
                        {/*<input type='email' placeholder='Enter your mail'/>*/}
                        <button  onClick={()=> window.location.href="https://www.bitci.com/"} className='btn'>Learn More</button>
                    </div>
                </div>
                {/*Right side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''    />

                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Hero;