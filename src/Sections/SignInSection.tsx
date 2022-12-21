import { UserContext, IUserContext } from "../Contexts/UserContext";
import { useContext } from "react";




const SignInSection = () => {



    const {signUpUser, signInUser, newUser, user, handleChangeSignUp, errors, setCantSignIn, setCantSignUp, cantSignIn, cantSignUp, signinErrors, handleChangeSignIn} = useContext(
        UserContext
    ) as IUserContext;
	return (
		<>
			<div className='userForm'>
				<div className='signUp'>
					<h4>Sign Up</h4>
					<form className='form-theme' onSubmit={signUpUser} noValidate>
						<input
							id='firstName'
							type='text'
							placeholder='First Name'
							value={newUser.firstName}
							onChange={handleChangeSignUp}
						/>
						<span className='error-mess'>{errors.firstName}</span>
						<input
							id='lastName'
							type='text'
							placeholder='Last Name'
							value={newUser.lastName}
							onChange={handleChangeSignUp}
						/>
						<span className='error-mess'>{errors.lastName}</span>
						<input
							id='email'
							type='email'
							placeholder='Email Adress'
							value={newUser.email}
							onChange={handleChangeSignUp}
						/>
						<span className='error-mess'>{errors.email}</span>
						<input
							id='password'
							type='password'
							placeholder='Password'
							value={newUser.password}
							onChange={handleChangeSignUp}
						/>
						<span className='error-mess'>{errors.password}</span>
						<button type='submit' className='btn-theme' disabled={cantSignUp}>
							Sign Up
						</button>
					</form>
				</div>
				<div className='signIn'>
					<h4>Sign In</h4>
					<form className='form-theme' onSubmit={signInUser}>
						<input
							name='email'
							type='email'
							placeholder='Email Adress'
							value={user.email}
							onChange={handleChangeSignIn}
						/>
						<span className='error-mess'>{signinErrors.email}</span>
						<input
							name='password'
							type='password'
							placeholder='Password'
							value={user.password}
							onChange={handleChangeSignIn}
						/>
						<span className='error-mess'>{signinErrors.password}</span>
						<button type='submit' className='btn-theme' disabled={cantSignIn}>
							Sign In
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
export default SignInSection;
