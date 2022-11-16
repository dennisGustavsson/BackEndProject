import { NavLink } from "react-router-dom";

const OurSpecialitySection = () => {
  return (
    <section className='speciality'>
      <h2 className='section-title'>Our speciality</h2>
      <div className='service-content'>
        <div className='service-card'>
          <div className='service-info'>
            <h2>Track Your Order</h2>
            <span>
              <NavLink className='get-started' to='/contacts'>
                Get Started<i className='fa-solid fa-angle-right'></i>
              </NavLink>
            </span>
          </div>
          <div className='service-img'></div>
        </div>
        <div className='service-card'>
          <div className='service-info'>
            <h2>Make a Return</h2>
            <span>
              <NavLink className='get-started' to='/contacts'>
                Get Started<i className='fa-solid fa-angle-right'></i>
              </NavLink>
            </span>
          </div>
          <div className='service-img'></div>
        </div>
        <div className='service-card'>
          <div className='service-info'>
            <h2>Request a Price Adjustment</h2>
            <span>
              <NavLink className='get-started' to='/contacts'>
                Get Started<i className='fa-solid fa-angle-right'></i>
              </NavLink>
            </span>
          </div>
          <div className='service-img'></div>
        </div>
      </div>
    </section>
  );
};
export default OurSpecialitySection;
