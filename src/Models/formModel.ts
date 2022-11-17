export interface Errors {
	name?: string | null;
	email?: string | null;
	comments?: string | null;
}

export interface ContactModel {
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
