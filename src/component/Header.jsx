import React from 'react';
import hero1 from '../images/hero1.jpg';
import hero4 from '../images/hero4.jpg'

const Header = () => {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
            <div className="row">
                {/* main header left */}
                <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                    <h2 className='display-2'>
                        Online Payment Made <br /> Easy For You.
                    </h2>
                    <p className="main-hero-pera">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quod ipsa minus dolorem hic nemo doloribus maiores vitae pariatur officiis maxime tenetur est voluptates corporis delectus vel nulla earum sit?
                    </p>
                    <h3>Get early access for you</h3>
                    <div className="input-group mt-3">
                        <input type="text" className='rounded-pill w-75 me-3 p-1 form-control-text'
                        placeholder='Enter Your Email'
                        />
                        <div className="input-group-text input-group-button">
                            Get it now
                        </div>
                    </div>
                </div>
                {/* main header left */}
                <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-start main-herosection-image'>
                    <img className="img-fluid" src={hero1} alt="heroimg" />
                    <img className="img-fluid main-hero-img2" src={hero4} alt="heroimg" />
                </div>
             </div>
        </section>
    </header>
    </>
  )
}

export default Header
