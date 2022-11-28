import { IUserContext, UserContext } from "../Contexts/UserContext";
import React, { useEffect } from "react";
import { User } from "../Models/userModels";
import { NavLink } from "react-router-dom";

const ProductList: React.FC = () => {
	const { users, getAll, remove } = React.useContext(UserContext) as IUserContext;

	//! for every new render, useEffect will fetch all users from the list and render to page
	useEffect(() => {
		getAll();
	}, [getAll]);

	return (
		<>
			<h3>List of Users</h3>
			{
				/* renders a user element for every user in list.. */
				users.map((user: User) => (
					<>
						<div className="product-list" key={user.id}>
							{user.firstName} {user.lastName} {user.email}
							<NavLink className='btn-theme' to={`/updateproduct/${user.id}`}>
								Update Product
							</NavLink>
							<button onClick={() => remove(user.id)}> Remove Product</button>
						</div>
					</>
				))
			}
		</>
	);
};
export default ProductList;
