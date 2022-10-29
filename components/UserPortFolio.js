import React from 'react'
import { Table } from '@mantine/core';

const USER_VALS = [
	{ name: "User1", stock: 100,fiat:5000 },
	{ name: "User2", stock: 100,fiat:5000 },
	{ name: "User3", stock: 100,fiat:5000 },
	{ name: "User4", stock: 100,fiat:5000 },
	
];
const UserPortFolio = () => {

    const rows = USER_VALS.map((element) => (
			<tr key={element.name}>
				<td>{element.name}</td>
				<td>{element.stock}</td>
				<td>{element.fiat}</td>
			</tr>
		));
  return (
		<div  className='font-poppins rounded-3xl bg-gray-800 w-3/4 p-5'>
			<h6 className = 'text-2xl font-medium'>User Portfolio</h6>
			<Table highlightOnHover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Stock</th>
						<th>Fiat</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</div>
	);
}

export default UserPortFolio