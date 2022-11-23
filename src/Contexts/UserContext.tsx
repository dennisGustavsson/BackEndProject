import userEvent from "@testing-library/user-event";
import React, { useState, useContext, createContext } from "react";
import { User, UserRequest, UserProviderProps } from "../Models/userModels";

//! INTERFACE/CONTRACT FOR OUR CONTEXT
export interface IUserContext {
	user: User;
	userRequest: UserRequest;
	setUser: React.Dispatch<React.SetStateAction<User>>;
	setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>>;
	users: User[];
	create: (e: React.FormEvent) => void;
	get: (id: number) => void;
	getAll: () => void;
	update: (id: number, e: React.FormEvent) => void;
	remove: (id: number) => void;
}

//! the context
export const UserContext = createContext<IUserContext | null>(null);
export const useUserContext = () => {
	return useContext(UserContext);
};

//! the context provider

const UserProvider = ({ children }: UserProviderProps) => {
	const baseUrl = "http://localhost:5000/api/users";

	const defaultUserValues: User = {
		id: 0,
		firstName: "",
		lastName: "",
		email: "",
	};
	const defaultUserRequestValues: UserRequest = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	};

	const [user, setUser] = useState<User>(defaultUserValues);
	const [userRequest, setUserRequest] = useState<UserRequest>(
		defaultUserRequestValues
	);
	const [users, setUsers] = useState<User[]>([]);

	const create = async (e: React.FormEvent) => {
		e.preventDefault();

		const result = await fetch(`${baseUrl}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userRequest),
		});
		//! user was created without a problem
		if (result.status === 201) setUserRequest(defaultUserRequestValues); // set default values to form again.
	};

	//! Fetch a specific user from id.

	const get = async (id: number) => {
		const result = await fetch(`${baseUrl}/${id}`);
		if (result.status === 200) setUser(await result.json());
	};

	//! fetch all users from api
	const getAll = async () => {
		const result = await fetch(`${baseUrl}`);
		if (result.status === 200) setUsers(await result.json()); //setUsers puts all users into users-variable
	};

	//! update a specific user with id
	const update = async (id: number, e: React.FormEvent) => {
		e.preventDefault();

		const result = await fetch(`${baseUrl}/${id}`, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		if (result.status === 200) setUser(await result.json());
	};

    //! delete specific user with id
	const remove = async (id: number) => {
		const result = await fetch(`${baseUrl}/${id}`, {
			method: "delete",
		});

		if (result.status === 204) 
            setUser(defaultUserValues);
	};

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				userRequest,
				setUserRequest,
				users,
				create,
				get,
				getAll,
				update,
				remove,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
