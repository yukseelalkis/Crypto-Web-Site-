import React, { useState } from "react";
import { FiArrowRight } from 'react-icons/fi';
import './Signup.css'
import Crypto from '../assets/trade.png'

const Signup = () => {

    function goTo(url) {
        window.location.href = url;
    }

    return (
        <div id ="ea"className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}

                <div className='right'>
                    <h2>Bitcoin</h2>
                    <h4>Turkey's first  only Cryptocurreny with  its  own blockchain network</h4>
                    <p>Turkey's first Cryptocurrency Bitcicoin with its own Blockchain network! Bitcicoin, the mainnet coin of the Bitcichain blockchain, gains value with the Fan Token and NFT projects created on the Bitcichain blockchain. For transfers of tokens on Bitcichain, the blockchain network fee is paid in Bitcicoin. Bitcicoin can be easily stored in Bitci E-Wallets developed by Bitci Teknoloji..</p>
                    <div className='input-container'>
                        <button onClick={() => window.location.href = "https://www.bitci.com/exchange/advanced/BITCI_USDT"} className="btn">Buy</button>
                        <button onClick={() => window.location.href = "https://www.bitci.com/projects/BITCI"} className="btn1">Detail<FiArrowRight /></button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
