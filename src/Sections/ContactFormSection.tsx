import { useState } from "react";
import { submitData, validation } from "../Assets/Scripts/submitValidation";
import { ContactModel } from "../Models/formModel";

const ContactFormSection: React.FC<ContactModel> = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [comments, setComment] = useState<string>("");
	const [errors, setErrors] = useState({name, email, comments});
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [submitFailed, setFailedSubmitted] = useState<boolean>(false);

	//handles the inputs and sets the value to each variable
	const handleChange = (
		e:
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLInputElement>
	) => {
		const { id, value } = e.target;
		switch (id) {
			case "name":
				setName(value); //sets the value of name
				break;
			case "email":
				setEmail(value);
				break;
			case "comments":
				setComment(value);
				break;
		}
		//sets the errors in the object onChange
		setErrors({ ...errors, [id]: validation(e) });
	};

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setFailedSubmitted(false);
		setSubmitted(false);

		setErrors(validation(e, {name, email, comments})); //sets the errors from valitation form

		if (
			errors.name === null &&
			errors.email === null &&
			errors.comments === null
		) {
			//makes a json object of our form
			let data = JSON.stringify({ name, email, comments });

			setName("");
			setEmail("");
			setComment("");
			setErrors({name, email, comments});

			if (await submitData(data)) {
				setSubmitted(true);
				setFailedSubmitted(false);
			} else {
				setSubmitted(false);
				setFailedSubmitted(true);
			}
		} else {
			setSubmitted(false);
		}
	};

	return (
		<section className='contact-us container'>
			{submitted ? (
				<div className='submitted'>
					{" "}
					<h3>Thank you!</h3> Your comment is posted and we will review it as
					soon as possible.
				</div>
			) : (
				<></>
			)}

			{submitFailed ? (
				<div className='submit-failed'>
					{" "}
					<h3>Sorry</h3> Your comment couldn't be posted at this moment. Please
					try again later.
				</div>
			) : (
				<></>
			)}

			<h3>Come in Contact with Us</h3>
			<form id='form' className='form-theme' onSubmit={handleSubmit} noValidate>
				<div className='d-grid-2'>
					<div className='relative'>
						<input
							className={errors.name ? "error-border" : ""}
							id='name'
							type='text'
							placeholder=' '
							onChange={handleChange}
							value={name}
						/>
						<label htmlFor='name'>Your Name</label>
						<span className='error-msg'>{errors.name}</span>
					</div>
					<div className='relative'>
						<input
							className={errors.email ? "error-border" : ""}
							id='email'
							type='email'
							placeholder=' '
							onChange={handleChange}
							value={email}
						/>
						<label htmlFor='email'>Your Email</label>
						<span className='error-msg'>{errors.email}</span>
					</div>
				</div>
				<div className='relative'>
					<textarea
						name='comments'
						id='comments'
						className={errors.comments ? "error-border" : ""}
						placeholder=' '
						onChange={handleChange}
						value={comments}
					></textarea>
					<label htmlFor='comments'>Comments</label>
					<span id='comments-error' className='error-msg'>
						{errors.comments}
					</span>
				</div>
				<div className='relative'>
					<button id='subButton' type='submit' className='btn-theme'>
						Post Comments
					</button>
					<span className='error-msg-btn'></span>
				</div>
			</form>
		</section>
	);
};
export default ContactFormSection;
