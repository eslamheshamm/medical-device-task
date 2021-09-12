import { BackToHome } from "../App";
import { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
/*
  Think about the data you've received, how can we best extract insights
  from this data?

  Feel free to come up with more visualization ideas 
  than the ones required below.
*/
interface UserInfos {
	gender: string;
	location: {
		country: string;
	};
	dob: {
		age: number;
	};
	registered: {
		date: string;
	};
}
const API_URL =
	"https:////randomuser.me/api/?seed=dexi-interview?page=0&results=100";

const ChallengeThree = () => {
	const [users, setUsers] = useState([]);
	//const [isLoading, setIsLoading] = useState(false);

	const getMaleAndFemaleData = () => {
		const malesCount = users.filter((user: UserInfos) => {
			return user.gender === "male";
		}).length;

		const maleAndFemaleData = {
			labels: ["Male", "Female"],
			datasets: [
				{
					label: "# Gender",
					data: [malesCount, 100 - malesCount],
					backgroundColor: [
						"rgba(255, 99, 132, 0.2)",
						"rgba(54, 162, 235, 0.2)",
					],
					borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				},
			],
		};
		return maleAndFemaleData;
	};
	const getCountryData = () => {
		const map = new Map();
		users.forEach((user: UserInfos, index) => {
			const val = map.get(user.location.country);
			map.set(user.location.country, isNaN(val) ? 0 : val + 1);
		});
		const data = Array.from(map.values());
		data.push(0);
		const countryData = {
			labels: Array.from(map.keys()),
			datasets: [
				{
					label: "Country",
					data: data,
					backgroundColor: [
						"rgba(255, 99, 132, 0.2)",
						"rgba(54, 162, 235, 0.2)",
						"rgba(255, 206, 86, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(153, 102, 255, 0.2)",
						"rgba(255, 159, 64, 0.2)",
						"rgba(25,102, 232, 0.2)",
						"rgba(54, 162, 235, 0.2)",
						"rgba(255, 206, 86, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(153, 102, 255, 0.2)",
						"rgba(255, 99, 132, 0.2)",
						"rgba(54, 162, 235, 0.2)",
						"rgba(255, 206, 86, 0.2)",
						"rgba(75, 192, 192, 0.2)",
						"rgba(153, 102, 255, 0.2)",
						"rgba(255, 206, 86, 0.2)",
						"rgba(255, 206, 86, 0.2)",
						"rgba(255, 206, 86, 0.2)",
						"rgba(255, 206, 86, 0.2)",
					],
					borderColor: [
						"rgba(255, 99, 132, 1)",
						"rgba(54, 162, 235, 1)",
						"rgba(255, 206, 86, 1)",
						"rgba(75, 192, 192, 1)",
						"rgba(153, 102, 255, 1)",
						"rgba(255, 159, 64, 1)",
					],
				},
			],
		};

		return countryData;
	};

	const getAgeData = () => {
		const ageRanges: any = [[], [], [], []];
		users.forEach((user: UserInfos, index) => {
			ageRanges[Math.floor(user.dob.age / 25)].push(user.dob.age);
		});
		const ageRangesData = {
			labels: ["0-25", "25-50", "50-75", "75-100"],
			datasets: [
				{
					label: "Age Range",
					data: [
						ageRanges[0].length,
						ageRanges[1].length,
						ageRanges[2].length,
						ageRanges[3].length,
					],
					backgroundColor: ["rgba(255, 99, 132, 0.2)"],
					borderColor: ["rgba(255, 99, 132, 1)"],
				},
			],
		};
		return ageRangesData;
	};

	const getYearData = () => {
		let map: any = new Map();
		users.forEach((element: UserInfos) => {
			const key = new Date(element.registered.date).getFullYear();
			const val = map.get(key);
			map.set(key, isNaN(val) ? 0 : val + 1);
		});
		map = new Map([...map].sort());

		const yearData = {
			labels: Array.from(map.keys()),
			datasets: [
				{
					label: "Registration Date",
					data: Array.from(map.values()),
					backgroundColor: ["rgba(54, 162, 235, 0.2)"],
					borderColor: ["rgba(54, 162, 235, 1)"],
				},
			],
		};

		return yearData;
	};
	const getUsers = async () => {
		//  setIsLoading(true);
		let response = await fetch(API_URL);
		let data = await response.json();

		setUsers(data.results);

		//  setIsLoading(false);
	};

	useEffect(() => {
		getUsers();
	}, []);
	getYearData();
	return (
		<>
			<BackToHome />
			<h1 className="title is-1 has-text-white">Challenge 3</h1>
			<h2 className="subtitle has-text-grey-lighter">
				Fetch 100 users from the same api as before, and visualize their
				distribution by <code>age</code>, <code>gender</code>,
				<code>country</code>, and <code>registration date</code>.
			</h2>

			{/* Insert your data visualizations here */}

			<Pie data={getMaleAndFemaleData} />
			<br />
			<br />
			<br />
			<Line data={getAgeData} />
			<br />
			<br />
			<br />
			<Bar data={getCountryData} />
			<br />
			<br />
			<br />
			<Line data={getYearData} />
			{/* this one is better with something like tableu world map */}
		</>
	);
};

export default ChallengeThree;
