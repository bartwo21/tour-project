import React from 'react'
import './footer.scss'
import { BiLogoFacebook } from 'react-icons/bi'
import { RiTwitterXLine } from 'react-icons/ri'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import img from './img/1.png'

type Props = {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <div className="footer-container">
        <div className="footer-upside">
            <div className="column">
                <h3>Contact us</h3>
                <ul>
                    <li>1-214-2412</li>
                    <li>Help Center</li>
                    <li>Live Chat</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className="column">
                <h3>Resources</h3>
                <ul>
                    <li>Flights</li>
                    <li>Hotels</li>
                    <li>Car Rentals</li>
                    <li>Travel Insurance</li>
                </ul>
            </div>
            <div className="column">
                <h3>Our company</h3>
                <ul>
                    <li>About</li>
                    <li>Press</li>
                    <li>Careers</li>
                    <li>Investors</li>
                </ul>
            </div>
            <div className="column">
                <h3>Other Tour brands</h3>
                <ul>
                    <li>Study Abroad</li>
                    <li>Go Ahead Tours</li>
                    <li>City Tours</li>
                    <li>Grand Circle Cruise Line</li>
                    <li>Gap Year</li>
                    <li>Ultimate Break</li>
                </ul>
            </div>
        </div>
        <div className="footer-middle-side">
            <div className="inner-footer-middle-side">
                <div className="img">
                    <img src={img} />
                </div>
                <div className="social-media-icons">
                    <i className="icon"><BiLogoFacebook size={25}/></i>
                    <i className="icon"><RiTwitterXLine size={25}/></i>
                    <i className="icon"><AiOutlineInstagram size={25}/></i>
                    <i className="icon"><BsPinterest size={25}/></i>
                    <i className="icon"><AiFillYoutube size={25}/></i>
                </div>
            </div>
            
        </div>
        <div className="footer-downside">
            <div className="inner-footer-downside">
                <div className="footer-downside-left">
                    <p>© 2023 Tour, Inc. All rights reserved.</p>
                </div>
                <div className="footer-downside-right">
                    <p>Terms & Conditions</p>
                    |
                    <p>
                        Privacy Policy
                    </p>
                    |
                    <p>
                        Site Map
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer