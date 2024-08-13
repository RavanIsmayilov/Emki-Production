import React from 'react'
import Logo from '../../assets/image/Emki.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (

        <>
            <div className='footer-margin-top'>
                <div className='container'>
                    <div className='footer-body'>
                        <img src={Logo} alt="" srcset="" />
                        <div className='footer-text'>
                            <div className='footer-information'>
                                <div className='footer-text-midle'>
                                    Sosial
                                </div>
                                <div>
                                    <Link href=""> Facebook</Link>
                                    <Link href=""> Instagram</Link>
                                </div>
                            </div>
                            <div className='footer-information'>
                                <div className='footer-text-midle'>
                                    Information
                                </div>
                                <a href=""> About us</a>
                                <a href=""> Sponsor</a>
                            </div>
                            <div className='footer-information'>
                                <div className='footer-text-midle'>
                                    Contact
                                </div>
                                <a href=""> office@emki.az</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='bottom-text'>
                        © emkiproduction.com 2023
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer