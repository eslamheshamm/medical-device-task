import { BackToHome } from "../App";

const person = [
	["name", "id", "age", "weight", "job"],
	["Mohammed", "3", "20", "120", "developer"],
	["John", "1", "21", "150", "designer"],
	["Ali", "2", "23", "90", "doctor"],
	["Mariam", "4", "20", "100", "lawyer"],
];

const personHeight = [
	["name", "id", "height"],
	["Ali", "2", "50"],
	["John", "1", "45"],
	["Mariam", "4", "43"],
	["Mohammed", "3", "48"],
	["Tony", "5", "96"],
];

const personParent = [
	["name", "id", "parent"],
	["Ali", "2", "yes"],
	["John", "1", "yes"],
	["Tony", "5", "yes"],
];

const personHobby = [
	["name", "id", "hobby"],
	["Mariam", "4", "video games"],
	["Ali", "2", "kickboxing"],
	["Tony", "5", "football"],
];

const personStatus = [
	["id", "status"],
	["1", "active"],
	["2", "inactive"],
	["3", "active"],
	["4", "active"],
	["5", "active"],
];

/* 
  Combine the arrays into one table. 
  You may find console.table()
  useful for monitoring your progress
  You may not install any external libraries.
*/
let persons = new Map();

const addIntoMap = (table: any, id: any, value: any, index: number) => {
	let key = table[0][index];
	let mapValue: any = {};
	mapValue[key] = value;
	let currentMapValue = persons.get(id);
	Object.assign(mapValue, currentMapValue);

	persons.set(id, mapValue);
};

const merge = () => {
	person.forEach((row, index) => {
		if (index === 0) return;

		row.forEach((value, index2) => {
			addIntoMap(person, row[1], value, index2);
		});
	});

	personHeight.forEach((row, index) => {
		if (index === 0) return;

		row.forEach((value, index2) => {
			addIntoMap(personHeight, row[1], value, index2);
		});
	});

	personHobby.forEach((row, index) => {
		if (index === 0) return;

		row.forEach((value, index2) => {
			addIntoMap(personHobby, row[1], value, index2);
		});
	});
	personParent.forEach((row, index) => {
		if (index === 0) return;

		row.forEach((value, index2) => {
			addIntoMap(personParent, row[1], value, index2);
		});
	});
	personStatus.forEach((row, index) => {
		if (index === 0) return;

		row.forEach((value, index2) => {
			addIntoMap(personStatus, row[0], value, index2);
		});
	});

	console.table(Array.from(persons.values()));
};

const ChallengeOne = () => {
	merge();
	return (
		<>
			<BackToHome />
			<h1 className="title is-1 has-text-white">Challenge 1</h1>
			<h2 className="subtitle has-text-grey-lighter">
				Inside <code>/tasks/one.js</code> you will find a set of arrays. Merge
				them into one array.
			</h2>
			<h2 className="subtitle has-text-grey-lighter">
				You may not install any additional libraries.
			</h2>
		</>
	);
};

export default ChallengeOne;
