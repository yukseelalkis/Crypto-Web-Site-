import React from 'react'
import {FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h2><span className='primary'>Bitci</span> Global</h2>
                    <div className='col'>
                    <span className='bar'></span>
                        
                        <a href='https://twitter.com/bitcicomglobal' target='blank'><FaTwitter className='icon'/></a>
                        <a href='https://www.instagram.com/bitcicomglobal/' target='blank'><FaInstagram className='icon'/></a>
                        <a href='https://discord.com/invite/bitcicom' target='blank'><FaDiscord className='icon'/></a>
                        <a href='https://www.facebook.com/bitcicomglobal' target='blank'><FaFacebook className='icon'/></a>
                        <a href='https://www.linkedin.com/company/bitciglobal/about/' target='blank'><FaLinkedin className='icon'/></a>
                        
                    </div>
                </div>



                <div className='col'>
                    <h5>About Us</h5>
                    <span className='bar'></span>
                        <a href='https://www.bitci.com/about' target='blank'>About Us</a>
                        <a href='https://www.bitci.com/page/bitcicoin' target='blank'>Bitcicoin</a>
                        <a href='https://www.bitci.com/projects' target='blank'>Fan Tokens</a>
                </div>

                <div className='col'>
                    <h5>Services</h5>
                    <span className='bar'> </span>
                        <a href='https://www.bitci.com/announcements'>Announcements</a>
                        <a href='https://www.bitci.com/page/limits'>Limits</a>
                        <a href='https://www.bitci.com/page/commissions'>Commissions</a>
                        <a href='https://www.bitci.com/page/launchpad'>Launchpad</a>
                   
                </div>
                <div className='col'>
                    <h5>Buy</h5>
                    <span className='bar'> </span>
                        <a href='https://www.bitci.com/exchange/advanced/BTC_USDT'>Buy Bitcoin</a>
                        <a href='https://www.bitci.com/exchange/advanced/BITCI_USDT'>Buy Bitcicoin</a>
                        <a href='https://www.bitci.com/exchange/advanced/ETH_USDT'>Buy Ethereum</a>
                </div>

                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'> </span>
                        <a href='https://www.bitci.com/page/bug-bounty'>Bug Bounty</a>
                        <a href='https://support.bitci.com/hc/en-us'>Frequently Asked Questions</a>
                        <a href='https://support.bitci.com/hc/en-us/requests/new'>Support</a>
                </div>


                


                {/*
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <a href='https://www.facebook.com/bitcicomglobal' target='blank'><FaFacebook className='icon'/></a>
                        <a href='https://twitter.com/bitcicomglobal' target='blank'><FaTwitter className='icon'/></a>
                        <a href='https://www.linkedin.com/company/bitciturkiye/' target='blank'><FaLinkedin className='icon'/></a>
                        <a href='https://github.com/BitciTeknoloji' target='blank'><FaGithub className='icon'/></a>
                </div>
                */}
            </div>
            
        </div>
    )
}

export default Footer
