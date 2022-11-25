import { NavLink } from "react-router-dom";
interface Props {
  currentPage: string
  prevPage: string
}

const BreadcrumbSection: React.FC<Props> = ({ currentPage, prevPage }) => {
  return (
    <>
      <div className='breadcrumb'>
        <div className='container'>
          <ul className='breadcrumb-list'>
            <li>
              <NavLink to={`${prevPage}`}>{prevPage}</NavLink>
            </li>
            <li>{currentPage}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default BreadcrumbSection;
