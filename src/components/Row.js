import React from "react";

const Row = ({ user }) => {
	const {
		fullName,
		phoneNumber,
		jobTitle,
		department,
		office,
		joiningDate,
		salary,
		age,
		gender,
		language,
	} = user;

	return (
		<tr className="hover hover:text-primary">
			<td>{fullName}</td>
			<td>{phoneNumber}</td>
			<td>{jobTitle}</td>
			<td>{department}</td>
			<td>{office}</td>
			<td>{joiningDate}</td>
			<td>{salary}</td>
			<td>{age}</td>
			<td>{gender}</td>
			<td>{language}</td>
		</tr>
	);
};

export default Row;
