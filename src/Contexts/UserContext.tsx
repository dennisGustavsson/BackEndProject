import React, { useContext, useState, createContext } from "react";

export interface IUserContext {
	signUpUser: (e: React.FormEvent) => void;
	signInUser: (e: React.FormEvent) => void;
	newUser: NewUserType;
	user: UserType;
	setNewUser: React.Dispatch<React.SetStateAction<NewUserType>>;
	setUser: React.Dispatch<React.SetStateAction<UserType>>;
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
	//! Create new user
	const signUpUser = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = await fetch(`${baseUrl}/signup`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		});

		if (result.status === 201) {
			console.log(await result.json());
			setNewUser(defaultValuesNewUser);
		} else {
			console.log(await result.json());
		}
	};

    //! Sign in user

	const signInUser = async (e: React.FormEvent) => {
		e.preventDefault();

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
	};

	return (
		<UserContext.Provider
			value={{
				signUpUser,
				signInUser,
				newUser,
				setNewUser,
                setUser, user
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
