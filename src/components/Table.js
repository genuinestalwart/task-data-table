import React, { useEffect, useState } from "react";
import Row from "./Row";

const Table = ({ currentPage, setPages }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("./mock_data.json")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUsers(data);
				setPages(Math.ceil(data.length / 10));
			});
	}, [setPages]);

	return (
		<section className="my-12">
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
