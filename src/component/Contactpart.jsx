import React from 'react';
import contactimg from '../images/contactimg.jpg';

const Contactpart = () => {
  return (
    <section className='contactus-section'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-11 mx-auto">
                    <div className="row">
                        <div className="col-lg-5 col-12 contact-leftside">
                            <h1 className="main-heading fw-bold">Connect with our <br /> Sales Team </h1>
                            <p className="main-hero-pera contact-pera">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum minus modi sequi! Excepturi rerum vero quidem laboriosam deserunt rem.
                            </p>
                            <figure>
                                <img src={contactimg} alt="contactimg"/>
                            </figure>

                        </div>
                        {/* right side contact form */}
                        <div className="right-contact-form col-12 col-lg-7">
                            <form method='post'>
                           
                                    <div className="row">
                                        <div className="col-lg-6 col-12 contact-input-field">
                                            <input type="text" 
                                            name="" 
                                            id=""  
                                            placeholder='First Name'
                                            className='form-control'
                                            />
                                        </div>
                                        <div className="col-lg-6 col-12 contact-input-field">
                                            <input type="text" 
                                            name="" 
                                            id=""  
                                            placeholder='Last Name'
                                            className='form-control'
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-12 contact-input-field">
                                            <input type="text" 
                                            name="" 
                                            id=""  
                                            placeholder='phone number'
                                            className='form-control'
                                            />
                                        </div>
                                        <div className="col-lg-6 col-12 contact-input-field">
                                            <input type="text" 
                                            name="" 
                                            id=""  
                                            placeholder='Mobile ID'
                                            className='form-control'
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 contact-input-field">
                                            <input type="text" 
                                                name=''
                                                id=''
                                                className='form-control'
                                                placeholder='Add Address'
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <input type="text" 
                                                name=''
                                                id=''
                                                className='form-control'
                                                placeholder='Enter your Message'
                                            />
                                        </div>
                                    </div>
                                        {/* check box */}
                                    <div class="form-check form-checkbox-style">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                        <label class="form-check-label" className='btn-label'>
                                           I agree Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, eum!
                                        </label>
                                    </div>
                                <button className='btn btn-style w-100' type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contactpart;
