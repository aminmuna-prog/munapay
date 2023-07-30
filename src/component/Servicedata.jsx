import React from 'react';
import { useState } from 'react';
import serviceapi from './API/Serviceapi';


const Servicedata = () => {
    const [aboutData, setAboutdata] = useState(serviceapi);
    return (
    <div>
        {aboutData.map((currelement) =>{
            const {id, title, info} = currelement
                return(
                    <>
                        <div className="our-services-info row">
                            <div className="col-1 our-services-number">{id}</div>
                                <div className="col-10 our-services-data">
                                    <h2>{title}</h2>
                                    <p className="main-hero-pera">
                                        {info}
                                    </p>
                                </div>
                        </div>
                                        
                    </>
                    )
        })}
    </div>
  )
}

export default Servicedata;
