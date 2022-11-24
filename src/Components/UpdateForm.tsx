import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IUserContext, UserContext } from "../Contexts/UserContext";

const UpdateForm = () => {

    
    // const {id} = useParams()
	const { user, setUser, update, get } = React.useContext(
		UserContext
	) as IUserContext;

    
    // useEffect(() => {
	// 		get(id);
	// 	}, [get, id]);


	return (
		<>
			<h3> Update User</h3>
			<form onSubmit={update} className='form-theme'>
                <input type="hidden" value={user.id} />
				<input
					id='reqFirstName'
					value={user.firstName}
					onChange={(e) =>
						setUser({ ...user, firstName: e.target.value })
					}
					type='text'
					placeholder='Enter your first name...'
				/>
				{/* <label htmlFor='reqFirstName'>First Name</label> */}
				<input
					id='reqLastName'
					value={user.lastName}
					onChange={(e) =>
						setUser({ ...user, lastName: e.target.value })
					}
					type='text'
					placeholder='Enter your last name...'
				/>
				{/* <label htmlFor='reqLastName'>Last Name</label> */}
				<input
					id='reqEmail'
					value={user.email}
					onChange={(e) =>
						setUser({ ...user, email: e.target.value })
					}
					type='text'
					placeholder='Enter your email...'
				/>
				
				<button type='submit' className='btn-theme'>
					Create User
				</button>
			</form>
		</>
	);
};
export default UpdateForm;
