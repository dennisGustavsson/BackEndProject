import { NavLink } from "react-router-dom";

const BreadcrumbSection = ({ currentPage }) => {
  return (
    <>
      <div className='breadcrumb'>
        <div className='container'>
          <ul className='breadcrumb-list'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>{currentPage}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default BreadcrumbSection;
