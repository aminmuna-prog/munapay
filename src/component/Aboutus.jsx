import Serviceimg from './Serviceimg';
import Servicedata from './Servicedata';
import about from '../images/our-service.jpg';
import serviceimg from '../images/pay2.jpg'

const Aboutus = () => {
   
  return (
    <>
        <div className="common-section our-services">
            <div className="container mb-5">
                <div className="row">
                    {/* img section */}
                    <div className="col-lg-5 text-center our-service-leftside-img">
                    <Serviceimg serimg={about}></Serviceimg>
                    </div>
                    {/* service section */}
                  
                    <div className="col-lg-7 col-12 our-services-list">
                        <h3 className="mini-title">
                        --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                        </h3>
                        <h1 className='main-heading'>How to use the app</h1>
                        <Servicedata></Servicedata> 
                        <button className='btn-style'>learn more</button>
                    </div>
                </div>
            </div>
        </div>

        {/* second section part */}
        <div className="common-section our-services our-service-rightside">
            <div className="container mb-5">
                <div className="row">
                   
                    {/* service section */}
                  
                    <div className="col-lg-7 col-12 our-service-rightside-content d-flex
                     justify-content-center our-services-list align-items-start flex-column">
                        <h3 className="mini-title">
                        --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                        </h3>
                        <h1 className='main-heading'>How to use the app</h1>
                        <Servicedata></Servicedata>
                                
                        <button className='btn-style'>learn more</button>
                    </div>

                     {/* img section */}
                     <div className="col-lg-5 our-service-leftside-img">
                     <Serviceimg serimg={serviceimg}></Serviceimg>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutus


