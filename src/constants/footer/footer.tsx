import React from 'react'
import './footer.scss'
import { BiLogoFacebook } from 'react-icons/bi'
import { RiTwitterXLine } from 'react-icons/ri'
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import img from './img/1.png'
import { Link } from 'react-router-dom'

type Props = {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <div className="footer-container">
        <div className="footer-upside">
            <div className="column">
                <h3>Contact us</h3>
                <ul>
                    <Link to="https://github.com/bartwo21/tour-project" target='_blank' className='li'>1-214-2412</Link>
                    <Link to="https://github.com/bartwo21/tour-project" target='_blank' className='li'>Help Center</Link>
                    <Link to="https://github.com/bartwo21/tour-project" target='_blank' className='li'>Live Chat</Link>
                    <Link to="https://github.com/bartwo21/tour-project" target='_blank' className='li'>FAQs</Link>
                </ul>
            </div>
            <div className="column">
                <h3>Resources</h3>
                <ul>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>Flights</Link>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>Hotels</Link>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>Car Rentals</Link>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>Travel Insurance</Link>
                </ul>
            </div>
            <div className="column">
                <h3>Our company</h3>
                <ul>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>About</Link>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>Press</Link>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>Careers</Link>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>Investors</Link>
                </ul>
            </div>
            <div className="column">
                <h3>Other Tour brands</h3>
                <ul>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>Go Ahead Tours</Link>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>City Tours</Link>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>Grand Circle Cruise Line</Link>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>Gap Year</Link>
                    <Link className='li' to="https://github.com/bartwo21/tour-project" target='_blank'>Ultimate Break</Link>
                </ul>
            </div>
        </div>
        <div className="footer-middle-side">
            <div className="inner-footer-middle-side">
                <div className="img">
                    <img src={img} />
                </div>
                <div className="social-media-icons">
                    <Link to="https://github.com/bartwo21/tour-project" target='_blank' className="icon"><BiLogoFacebook size={25}/></Link>
                    <Link to="https://github.com/bartwo21/tour-project" target='_blank' className="icon"><RiTwitterXLine size={25}/></Link>
                    <Link to="https://github.com/bartwo21/tour-project" target='_blank' className="icon"><AiOutlineInstagram size={25}/></Link>
                    <Link to="https://github.com/bartwo21/tour-project" target='_blank' className="icon"><BsPinterest size={25}/></Link>
                    <Link to="https://github.com/bartwo21/tour-project" target='_blank' className="icon"><AiFillYoutube size={25}/></Link>
                </div>
            </div>
            
        </div>
        <div className="footer-downside">
            <div className="inner-footer-downside">
                <div className="footer-downside-left">
                    <p>© 2023 Tour, Inc. All rights reserved.</p>
                </div>
                <div className="footer-downside-right">
                    <Link className='p' to="https://github.com/bartwo21/tour-project" target='_blank'>Terms & Conditions</Link>
                    |
                    <Link className='p' to="https://github.com/bartwo21/tour-project" target='_blank'>
                        Privacy Policy
                    </Link>
                    |
                    <Link className='p' to="https://github.com/bartwo21/tour-project" target='_blank'>
                        Site Map
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer