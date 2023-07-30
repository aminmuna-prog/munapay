import React from 'react'
import Footerlist from './Footerlist'

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-10 col-12 mx-auto">
                        <div className="row">
                           <Footerlist
                           title ='Company'
                           ></Footerlist>
                           <Footerlist   
                           title ='Support'
                           ></Footerlist>
                           <Footerlist
                           title ='Services'
                           ></Footerlist>
                           <div className="col-6 col-lg-3">
                                <h2>Follow us</h2>
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <a href="#">
                                            <i className='fab fa-instagram fontawesome-style'></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="#">
                                            <i className='fab fa-facebook fontawesome-style'></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="#">
                                            <i className='fab fa-youtube fontawesome-style'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='mt-5'>
                            <p className='main-hero-pera text-center footer-text'>Copuright @ 2023 Munapay. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;
