import React from 'react'
import { Table,Grid,Col } from '@mantine/core';


const BUY_VALS = [
	{ quantity: 6, price:100},
	{ quantity: 7, price:100},
	{ quantity: 7, price:100},
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
		<div className='font-poppins text-2xl font-bold rounded-3xl bg-gray-800 w-3/4 p-5'>
			<Grid>
				<Col span={6}>
				  <h6>Buy</h6>
				  <div className='h-2/4 overflow-hidden'>
					<Table fontSize="lg" horizontalSpacing='xs'>
						<thead>
							<tr>
								<th>Quantity</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					  </Table>
					</div>
				</Col>
				<Col span={6}>
					<h4>Sell</h4>
					<Table fontSize="lg">
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
					
					<Table fontSize="lg" horizontalSpacing='xs'>
						<thead>
							<tr>
								<th>Total</th>
								<th>Price</th>
							</tr>
						</thead>
						{/* <tbody>{}</tbody> */}
					</Table>
			  </Col>
			  
			</Grid>
		</div>
	);
}

export default OrderBook