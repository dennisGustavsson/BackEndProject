import React, { useState } from "react";
import {
	validateEmail,
	validateName,
	validateComment,
} from "../Assets/Scripts/submitValidation";
// import { ContactModel } from "../Models/formModel";

interface ContactFormType {
	name: string;
	email: string;
	comments: string;
}
const ContactFormSection: React.FC = () => {
	let defaultValues: ContactFormType = { name: "", email: "", comments: "" };
	const [contactData, setContactData] =
		useState<ContactFormType>(defaultValues);
	const [errors, setErrors] = useState<ContactFormType>(defaultValues);

	const baseUrl: string = "http://localhost:5000/api/contactform";
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [submitFailed, setFailedSubmitted] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setContactData({ ...contactData, [id]: value });
		switch (id) {
			case "name":
				setErrors({ ...errors, [id]: validateName(id, value) });
				break;
			case "email":
				setErrors({ ...errors, [id]: validateEmail(id, value) });
				break;
		}
	};
	const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { id, value } = e.target;
		setContactData({ ...contactData, [id]: value });
		if (id === "comments")
			setErrors({ ...errors, [id]: validateComment(id, value) });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(false);
		setFailedSubmitted(false);

		if (
			contactData.name !== "" &&
			contactData.email !== "" &&
			contactData.comments !== ""
		) {
			if (errors.name === "" && errors.email === "" && errors.comments === "") {
				const response = await fetch(baseUrl, {
					method: "post",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(contactData),
				});

				if (response.status === 200) {

					setSubmitted(true);
					setFailedSubmitted(false);
					setContactData(defaultValues);
				} else {

					setSubmitted(false);
					setFailedSubmitted(true);
				}
			}
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
							value={contactData.name}
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
							value={contactData.email}
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
						onChange={handleTextareaChange}
						value={contactData.comments}
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
