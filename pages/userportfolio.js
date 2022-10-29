import React from 'react';
import { Table,Text } from '@mantine/core';

const USER_VALS = [
	{ name: 'User1', stock: 100, fiat: 5000 },
	{ name: 'User2', stock: 100, fiat: 5000 },
	{ name: 'User3', stock: 100, fiat: 5000 },
	{ name: 'User4', stock: 100, fiat: 5000 },
	{ name: 'User5', stock: 100, fiat: 5000 },
	{ name: 'User6', stock: 100, fiat: 5000 },
	{ name: 'User7', stock: 100, fiat: 5000 },
	{ name: 'User8', stock: 100, fiat: 5000 },
	{ name: 'User9', stock: 100, fiat: 5000 },
	{ name: 'User10', stock: 100, fiat: 5000 },
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
		<div className="font-poppins rounded-3xl bg-gray-800 p-5 mx-24 my-8 text-center justify-center">
			<h6 className="text-2xl font-medium text-left">User Portfolio</h6>
			<div className='flex justify-center'>
			<Table highlightOnHover verticalSpacing ="md">
				<thead>
					<tr>
					
						<th><Text align="center">Name</Text></th>
						<th><Text align="center">Stock</Text></th>
						<th><Text align="center">Fiat</Text></th>
					
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
			</div>
		</div>
	);
};

export default UserPortFolio;
