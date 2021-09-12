import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./styles.scss";
import { UserInfo } from "./types";
const fetchData = async (pageNumber: number) =>
	axios
		.get(
			`https://randomuser.me/api/?seed=dexi-interview?page=${pageNumber}&results=5`
		)
		.then(({ data }) => {
			// handle success
			return data;
		})
		.catch((error) => {
			// handle error
			console.log(error);
		});
const TaskTwo = () => {
	const [userData, setUserData] = useState<any>([]);
	const [nextPageNumber, setNextPageNumber] = useState(1);
	const [loading, setLoading] = useState(true);
	const fetchNextUsers = useRef(() => {});
	fetchNextUsers.current = () => {
		fetchData(nextPageNumber).then((data) => {
			// handling the case if no data returned from api
			if (data === undefined) return;
			const newUserInfos = [...data.results, ...userData];
			setUserData(newUserInfos);
			setNextPageNumber(data.info.page + 1);
			setLoading(false);
		});
	};
	console.log(userData);
	useEffect(() => {
		fetchNextUsers.current();
	}, []);
	return (
		<div>
			<button
				onClick={() => {
					fetchNextUsers.current();
				}}
			>
				Load More
			</button>
			{loading && <p>Loading...</p>}
			<table>
				<tr>
					<th>Name</th>
					<th>Country</th>
					<th>City</th>
					<th>Age</th>
				</tr>
				{userData &&
					userData.map((user: UserInfo) => {
						return (
							<tr>
								{" "}
								<td>
									<div className="user-info">
										<figure>
											<img src={user.picture.thumbnail} alt={user.name.first} />
										</figure>
										<p>
											<span>{`${user.name.first} ${user.name.last}`}</span>
											<span>{user.email}</span>
										</p>
									</div>
								</td>
								<td>{user.location.country}</td>
								<td>{user.location.city}</td>
								<td>{user.dob.age}</td>
							</tr>
						);
					})}
			</table>
		</div>
	);
};
export default TaskTwo;
