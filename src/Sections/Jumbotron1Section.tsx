import firstJumboImg from "../Assets/images/img-5.svg";
import secondJumboImg from "../Assets/images/img-6.svg";

const Jumbotron1Section: React.FC = () => {
	return (
		<section className='jumbotron'>
			<div className='jumbo-content'>
				<img src={firstJumboImg} alt='' />
				<div className='jumbo-text'>
					<h2>Winter Clearance Up to 70% Off!</h2>
					<span>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem apriam eaque ipsa quae
						ab illo inventore.
					</span>
					<button className='btn-theme'>Shop now</button>
				</div>
			</div>
			<div className='jumbo-content'>
				<img src={secondJumboImg} alt='' />
				<div className='jumbo-text'>
					<h2>New Arrivals</h2>
					<button className='btn-theme'>Shop now</button>
				</div>
			</div>
		</section>
	);
};
export default Jumbotron1Section;
