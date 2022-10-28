import React from 'react'
import { useState } from 'react';
import { Drawer, Button, Group ,Table} from '@mantine/core';
import UserPortFolio from './UserPortFolio';


const TRANS_VALS = [
	{ buyer: 'User1', seller: 'User1', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User2', seller: 'User2', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User3', seller: 'User3', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'User4', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
	{ buyer: 'Userlast', seller: 'User4', quantity: 100, price: 5000, time: '10:20', },
];

const Transactions = () => {

    const [opened, setOpened] = useState(false);

    const rows = TRANS_VALS.map((element) => (
			<tr key={element.buyer}>
				<td>{element.buyer}</td>
				<td>{element.seller}</td>
				<td>{element.quantity}</td>
				<td>{element.price}</td>
				<td>{element.time}</td>
			</tr>
		));

  return (
		<div>
			<Drawer
				className="overflow-scroll"
				opened={opened}
				onClose={() => setOpened(false)}
				title="Transaction History"
				padding="xl"
				size="xl"
			>
				{
					<div>
						<Table>
							<thead>
								<tr>
									<th>Buyer</th>
									<th>Seller</th>
									<th>Quantity</th>
									<th>Price</th>
									<th>Time</th>
								</tr>
							</thead>
							<tbody>{rows}</tbody>
						</Table>
					</div>
				}
			</Drawer>

			<Group position="center">
				<Button onClick={() => setOpened(true)}>Open Drawer</Button>
			</Group>
		</div>
	);
}

export default Transactions