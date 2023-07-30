import React, { useState } from 'react';
import servicepageapi from './API/Servicepageapi';

const Servicepart = () => {
    const [servicedata, setServicedata] = useState(servicepageapi)
  return (
    <>
      <section className='service-main-container'>
        <div className="container service-container">
            <h1 className='main-heading text-center fw-bold'>How to send money</h1>
            <div className="row service-row">
              {/* service loop */}
              {servicedata.map((value) =>{
                  const {id, logo, title, info} = value;
                  return(
                      <>
                      
                          <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                              <i className={`fontawesome-style ${logo}`}></i>
                              <h2 className='sub-heading'>{title}</h2>
                              <p>{info}</p>
                          </div>
                      
                      </>
                  )
              })}
            </div>
           
        </div>
      </section>
    </>
  )
}

export default Servicepart;
