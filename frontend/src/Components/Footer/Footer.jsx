import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instergram_icon from '../Assets/instagram_icon.png'
import printrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Officers</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instergram_icon} alt="" />
                
            </div>
            <div className="footer-icons-container">
                <img src={printrest_icon} alt="" />
                
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
                
            </div>
            
        </div>
        <div className="footer-copyright">
            <hr />
        <p>Copyright @v2024 -All Right Reserved.</p>

        </div>
    </div>
  )
}
