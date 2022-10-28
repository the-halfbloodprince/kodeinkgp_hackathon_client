import React from 'react'
import { Table,Grid,Col } from '@mantine/core';


const BUY_VALS = [
	{ quantity: 6, price:100},
	{ quantity: 7, price:100},
	
];

const OrderBook = () => {


    const rows = BUY_VALS.map((element) => (
			<tr key={element.quantity}>
				<td>{element.quantity}</td>
				<td>{element.price}</td>
				
			</tr>
		));
  return (
		<div className=''>
			<Grid>
				<Col span={6}>
					<h6>Buy</h6>
					<Table>
						<thead>
							<tr>
								<th>Quantity</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</Table>
				</Col>
				<Col span={6}>
					<h6>Sell</h6>
					<Table>
						<thead>
							<tr>
								<th>Quantity</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</Table>
				</Col>
			</Grid>
		</div>
	);
}

export default OrderBook