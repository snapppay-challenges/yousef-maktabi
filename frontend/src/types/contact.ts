export interface Contact {
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	phone: string;
	note: string;
	telegram: string;
	avatar: string;
	company: string;
	address: null;
	createdAt: number;
	updatedAt: number;
	id: number;
}
/** Note (Mohammadreza): this type has some potential problems like null for address and of course some other properties could be string | null*/
