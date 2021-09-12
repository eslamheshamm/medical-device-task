export interface UserName {
	first: string;
	last: string;
	title: string;
}
export interface UserLocation {
	city: string;
	country: string;
}
export interface UserPicture {
	thumbnail: string;
}
export interface UserInfo {
	name: UserName;
	picture: UserPicture;
	location: UserLocation;
	email: string;
	dob: {
		age: number;
		date: string;
	};
}
