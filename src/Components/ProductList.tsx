import { IUserContext, UserContext } from "../Contexts/UserContext";
import React, { useEffect } from "react";
import { User } from "../Models/userModels";

const ProductList = () => {
	const { users, getAll } = React.useContext(UserContext) as IUserContext;

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
					<div key={user.id}>
						{" "}
						{user.firstName} {user.lastName}{" "}
					</div>
				))
			}
		</>
	);
};
export default ProductList;
