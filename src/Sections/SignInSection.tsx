import { UserContext, IUserContext } from "../Contexts/UserContext";
import { useContext } from "react";


const SignInSection = () => {


    const {signUpUser, signInUser, setNewUser, newUser, user, setUser} = useContext(
        UserContext
    ) as IUserContext;
	return (
		<>
			<div className='userForm'>
				<div className='signUp'>
					<h4>Sign Up</h4>
					<form className='form-theme' onSubmit={signUpUser}>
						<input
							// id='firstNamed'
							type='text'
							placeholder='First Name'
							value={newUser.firstName}
							onChange={(e) =>
								setNewUser({ ...newUser, firstName: e.target.value })
							}
						/>
						<input
							// id='lastName'
							type='text'
							placeholder='Last Name'
							value={newUser.lastName}
							onChange={(e) =>
								setNewUser({ ...newUser, lastName: e.target.value })
							}
						/>
						<input
							// id='email'
							type='email'
							placeholder='Email Adress'
							value={newUser.email}
							onChange={(e) =>
								setNewUser({ ...newUser, email: e.target.value })
							}
						/>
						<input
							// id='password'
							type='password'
							placeholder='Password'
							value={newUser.password}
							onChange={(e) =>
								setNewUser({ ...newUser, password: e.target.value })
							}
						/>
						<button type='submit' className='btn-theme'>
							Sign Up
						</button>
					</form>
				</div>
				<div className='signIn'>
					<h4>Sign In</h4>
					<form className='form-theme' onSubmit={signInUser}>

						<input
							id='email'
							type='email'
							placeholder='Email Adress'
							value={user.email}
							onChange={(e) =>
								setUser({ ...user, email: e.target.value })
							}
						/>
						<input
							id='password'
							type='password'
							placeholder='Password'
							value={user.password}
							onChange={(e) =>
								setUser({ ...user, password: e.target.value })
							}
						/>
						<button type='submit' className='btn-theme'>
							Sign In
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
export default SignInSection;
