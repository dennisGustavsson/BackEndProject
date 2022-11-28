import pamelaImg from "../Assets/images/img-3.svg";
import consciousImg from "../Assets/images/img-4.svg";
const Jumbotron2Section: React.FC = () => {
	return (
		<section className='jumbotron'>
			<div className='jumbo-content pamela'>
				<img src={pamelaImg} alt='' />
				<div className='jumbo-text'>
					<h2>Pamela Reif's Top Picks</h2>
					<button className='btn-theme'>Shop now</button>
				</div>
			</div>
			<div className='jumbo-content conscious'>
				<img src={consciousImg} alt='' />
				<div className='jumbo-text'>
					<h2>
						Let's Be <br />
						Conscious
					</h2>
					<button className='btn-theme'>Flash sale</button>
				</div>
			</div>
		</section>
	);
};
export default Jumbotron2Section;
