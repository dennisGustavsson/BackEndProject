import React, { useContext, useState, createContext } from "react";
import {
	validateEmail,
	validateName,
	validatePassword,
} from "../Assets/Scripts/submitValidation";

export interface IUserContext {
	signUpUser: (e: React.FormEvent) => void;
	signInUser: (e: React.FormEvent) => void;
	newUser: NewUserType;
	user: UserType;
	setNewUser: React.Dispatch<React.SetStateAction<NewUserType>>;
	setUser: React.Dispatch<React.SetStateAction<UserType>>;
	handleChangeSignUp: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeSignIn: (e: React.ChangeEvent<HTMLInputElement>) => void;
	errors: NewUserType;
	signinErrors: UserType;
	setErrors: React.Dispatch<React.SetStateAction<NewUserType>>;
	setSigninErrors: React.Dispatch<React.SetStateAction<UserType>>;
	cantSignUp: boolean;
	cantSignIn: boolean;
	setCantSignUp: React.Dispatch<React.SetStateAction<boolean>>;
	setCantSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NewUserType {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface UserType {
	email: string;
	password: string;
}

interface UserProviderProps {
	children: any;
}

export const useUserContext = () => {
	return useContext(UserContext);
};

export const UserContext = createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
	const baseUrl = "http://localhost:5000/api/authentication";

	const defaultValuesNewUser: NewUserType = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	};
	const defaultValuesUser: UserType = {
		email: "",
		password: "",
	};

	const [newUser, setNewUser] = useState<NewUserType>(defaultValuesNewUser);
	const [user, setUser] = useState<UserType>(defaultValuesUser);
	const [errors, setErrors] = useState<NewUserType>(defaultValuesNewUser);
	const [signinErrors, setSigninErrors] = useState<UserType>(defaultValuesUser);
	const [cantSignUp, setCantSignUp] = useState<boolean>(true);
	const [cantSignIn, setCantSignIn] = useState<boolean>(true);
	//! Create new user
	const signUpUser = async (e: React.FormEvent) => {
		e.preventDefault();

		if (
			newUser.firstName !== "" &&
			newUser.lastName !== "" &&
			newUser.email !== "" &&
			newUser.password !== ""
		) {
			if (
				errors.firstName === "" &&
				errors.lastName === "" &&
				errors.email === "" &&
				errors.password === ""
			) {
				const result = await fetch(`${baseUrl}/signup`, {
					method: "post",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newUser),
				});
				if (result.status === 201) {
					setNewUser(defaultValuesNewUser);
				} else {
					console.log(await result.json());
				}
			}
		}
	};

	const signInUser = async (e: React.FormEvent) => {
		e.preventDefault();

		if (user.email !== "" && user.password !== "") {
			if (signinErrors.email === "" && signinErrors.password === "") {
				const result = await fetch(`${baseUrl}/signin`, {
					method: "post",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(user),
				});
				if (result.status === 200) {
					const data = await result.json();
					console.log(data.accessToken);

					localStorage.setItem("accessToken", data.accessToken);
					setUser(defaultValuesUser);
				} else {
					console.log(await result.json());
				}
			}
		}
	};

	const handleChangeSignUp = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setNewUser({ ...newUser, [id]: value });
		switch (id) {
			case "firstName":
				setErrors({ ...errors, [id]: validateName(id, value) });
				break;
			case "lastName":
				setErrors({ ...errors, [id]: validateName(id, value) });
				break;
			case "email":
				setErrors({ ...errors, [id]: validateEmail(id, value) });
				break;
			case "password":
				setErrors({ ...errors, [id]: validatePassword(id, value) });
				if (
					errors.firstName === "" &&
					errors.lastName === "" &&
					errors.email === "" &&
					errors.password === ""
				)
					setCantSignUp(false);
				else setCantSignUp(true);
				break;
		}
	};
	const handleChangeSignIn = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
		switch (name) {
			case "email":
				setSigninErrors({
					...signinErrors,
					[name]: validateEmail(name, value),
				});
				break;
			case "password":
				setSigninErrors({
					...signinErrors,
					[name]: validatePassword(name, value),
				});
				if (signinErrors.email === "" && signinErrors.password === "")
					setCantSignIn(false);
				else setCantSignIn(true);
				break;
		}
	};

	return (
		<UserContext.Provider
			value={{
				signUpUser,
				signInUser,
				newUser,
				setNewUser,
				setUser,
				user,
				handleChangeSignUp,
				handleChangeSignIn,
				errors,
				signinErrors,
				setSigninErrors,
				setErrors,
				cantSignUp,
				setCantSignUp,
				cantSignIn,
				setCantSignIn,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
