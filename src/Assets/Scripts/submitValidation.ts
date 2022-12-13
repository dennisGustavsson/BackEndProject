
export interface FormData {
	name: string;
	email: string;
	comments: string;
}

export const validateName = (
	inputName: string,
	value: string,
	regexName: RegExp = /^(?=.{2,50}$)[a-z]+(?:['-\s][a-z]+)*$/i
) => {
	if (!regexName.test(value)) return `${inputName} is required`;
	else return "";
};

export const validateEmail = (
	inputEmail: string,
	value: string,
	regexEmail: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
) => {
	if (!regexEmail.test(value)) return `${inputEmail} is required`;
	else return "";
};

export const validateComment = (
	inputText: string,
	value: string,
	minLength: number = 20
) => {
	// let charsReq = 20;
	let charsleft = minLength - value.length;
	if (!value) {
		//if no value entered
		return "An comment is required";
	} else if (value.length < minLength) {
		// if value dont meets regex rules
		return `You need to enter at least ${charsleft} more charachters`;
	} else {
		return ""; //errors value is epmty
	}
};
