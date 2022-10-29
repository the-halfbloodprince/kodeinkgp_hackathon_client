import React from 'react';
import { Text,Table, Grid, Col } from '@mantine/core';

const BUY_VALS = [
	{ quantity: 6, price: 100 },
	{ quantity: 7, price: 100 },
	// { quantity: 8, price:100},
];

const OrderBook = () => {
	const rows = BUY_VALS.map((element) => (
		<tr key={element.quantity}>
			<td><Text align="left">{element.quantity}</Text></td>
			<td><Text align="right">{element.price}</Text></td>
		</tr>
	));
	return (
		<div className="mx-40 my-8 font-poppins  font-bold rounded-3xl bg-gray-800 w-4/4 p-5 ">
			
			<h6 className="text-3xl font-medium mb-10 text-center">Order Book</h6>
			<Grid className='justify-evenly'>
				
				<Col span={5}>
					<h6 className="text-base font-bold text-green ml-2 mt-2 mb-2">Buy</h6>
					
						<Table horizontalSpacing="xs">
							<thead>
								<tr className="text-base">
									<th><Text align="left">Quantity</Text></th>
									<th><Text align="right">Price</Text></th>
								</tr>
							</thead>
							<tbody className="font-medium">{rows}</tbody>
						</Table>
					
				</Col>
				<Col span={5}>
					<h6 className="text-base font-bold text-red mt-2 mb-2 ml-2">Sell</h6>
					<Table horizontalSpacing="xs">
						<thead>
							<tr className="text-base">
							<th><Text align="left">Quantity</Text></th>
									<th><Text align="right">Price</Text></th>
							</tr>
						</thead>
						<tbody className="font-medium">{rows}</tbody>
					</Table>
				</Col>
				<Col span={5}>
					<Table horizontalSpacing="xs" verticalSpacing="xs" >
						<thead>
							<tr className="text-base text-green">
							<th><Text align="left"><p className="text-green">Total</p></Text></th>
								<th><Text align="right"><p className="text-green">10000</p></Text></th>
							</tr>
						</thead>
					</Table>
				</Col>
				<Col span={5} >
					<Table horizontalSpacing="xs" verticalSpacing="xs">
						<thead>
						<tr className="text-base text-green">
								<th><Text align="left"><p className="text-red">Total</p></Text></th>
								<th><Text align="right"><p className="text-red">10000</p></Text></th>
							</tr>
						</thead>
					</Table>
				</Col>
			</Grid>
			</div>
		
	);
};

export default OrderBook;
