import customerService from "../Assets/images/icons/customer-service.svg";
import creditCard from "../Assets/images/icons/credit-card.svg";
import deliveryTruck from "../Assets/images/icons/delivery-truck.svg";
const ServiceSection: React.FC = () => {
	return (
		<section className='services'>
			<div className='container'>
				<div className='service-item'>
					<div className='img-circle'>
						<img src={customerService} alt='customer service icon' />
					</div>

					<h4>Customer Support</h4>
					<span>Lorem ipsum dolor sit amet consectetur.</span>
				</div>
				<div className='service-item'>
					<div className='img-circle'>
						<img src={creditCard} alt='customer service icon' />
					</div>
					<h4>Secured Payment</h4>
					<span>Lorem ipsum dolor sit amet consectetur.</span>
				</div>
				<div className='service-item'>
					<div className='img-circle'>
						<img src={deliveryTruck} alt='customer service icon' />
					</div>
					<h4>Free Home Delivery</h4>
					<span>Lorem ipsum dolor sit amet consectetur.</span>
				</div>
				<div className='service-item'>
					<div className='img-circle'>
						<img src={deliveryTruck} alt='customer service icon' />
					</div>
					<h4>30 Day Returns</h4>
					<span>Lorem ipsum dolor sit amet consectetur.</span>
				</div>
			</div>
		</section>
	);
};
export default ServiceSection;
