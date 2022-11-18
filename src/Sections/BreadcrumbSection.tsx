import { NavLink } from "react-router-dom";
interface Props {
  currentPage: string
}

const BreadcrumbSection: React.FC<Props> = ({ currentPage }) => {
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
