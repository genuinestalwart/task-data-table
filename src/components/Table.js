import React, { useEffect, useState } from "react";
import Row from "./Row";

const Table = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("./mock_data.json")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div className="px-8 pb-8">
			<div className="h-[calc(100vh_-_10rem)] overflow-x-auto">
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
						{users.map((user) => (
							<Row key={users.indexOf(user)} user={user}></Row>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
