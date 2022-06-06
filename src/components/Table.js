import React, { useEffect, useState } from "react";
import Row from "./Row";

const Table = ({ currentPage, query, search, setPages }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (search) {
			fetch("./mock_data.json")
				.then((res) => res.json())
				.then((data) => {
					const filtered = data.filter((user) =>
						Object.values(user).find(
							(el) =>
								typeof el === "string" &&
								el.toLowerCase().includes(query.toLowerCase())
						)
					);
					setUsers(filtered);
					setPages(Math.ceil(filtered.length / 10));
				});
		} else {
			fetch("./mock_data.json")
				.then((res) => res.json())
				.then((data) => {
					setUsers(data);
					setPages(Math.ceil(data.length / 10));
				});
		}
	}, [query, search, setPages]);

	return (
		<section className="my-12 px-12">
			<div className="overflow-x-auto">
				<table className="h-full table table-normal w-full">
					<thead>
						<tr className="bg-secondary-focus text-accent text-center">
							<th>Name</th>
							<th>Phone Number</th>
							<th>Job Title</th>
							<th>Department</th>
							<th>Office</th>
							<th>Joining Date</th>
							<th>Salary</th>
							<th>Age</th>
							<th>Gender</th>
							<th>Language</th>
						</tr>
					</thead>
					<tbody>
						{users
							.slice(currentPage * 10, currentPage * 10 + 10)
							.map((user) => (
								<Row key={users.indexOf(user)} user={user}></Row>
							))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Table;
