import leftShowcase from "../Assets/images/img-2.svg";
import rightShowcase from "../Assets/images/img-1.svg";
import { NavLink } from "react-router-dom";

const ShowcaseSection = () => {
	return (
		<nav className='showcase'>
			<div className='showcaseWrap'>
				<img src={leftShowcase} alt='placeholder' />
				<div className='showcase-items'>
					<h2>
						sale up to 50% off
						<span>Online shopping free home deilvery over $100</span>
					</h2>
					<NavLink to='/products/' className='btn-theme'>
						Shop now
					</NavLink>
				</div>
				<img id='hide-img' src={rightShowcase} alt='placeholder' />
			</div>
		</nav>
	);
};
export default ShowcaseSection;
