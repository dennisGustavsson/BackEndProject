import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IUserContext, UserContext } from "../Contexts/UserContext";
import BreadcrumbSection from "../Sections/BreadcrumbSection";

const UpdateForm = () => {
	const { id }:any = useParams()
	const { user, setUser, update, get } = React.useContext(
		UserContext
	) as IUserContext;

	useEffect(() => {
			get(id);
		}, []);

	return (
		<>
		{/* <BreadcrumbSection currentPage={`Update Product`} prevPage={'/'}/> */}
			<h3> Update Product</h3>
			<form onSubmit={update} className='form-theme'>
				<input type='hidden' value={user.id} />
				<input
					id='reqFirstName'
					value={user.firstName}
					onChange={(e) => setUser({ ...user, firstName: e.target.value })}
					type='text'
					placeholder={user.firstName}
				/>
				{/* <label htmlFor='reqFirstName'>First Name</label> */}
				<input
					id='reqLastName'
					value={user.lastName}
					onChange={(e) => setUser({ ...user, lastName: e.target.value })}
					type='text'
					placeholder={user.lastName}
				/>
				{/* <label htmlFor='reqLastName'>Last Name</label> */}
				<input
					id='reqEmail'
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					type='text'
					placeholder={user.email}
				/>

				<button type='submit' className='btn-theme'>
					Update Product
				</button>
			</form>
		</>
	);
};
export default UpdateForm;
