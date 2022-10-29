import React from 'react'
import { Table,Grid,Col } from '@mantine/core';


const BUY_VALS = [
	{ quantity: 6, price:100},
	{ quantity: 7, price:100},
	// { quantity: 8, price:100},
	
	
];

const OrderBook = () => {


    const rows = BUY_VALS.map((element) => (
			<tr key={element.quantity}>
				<td>{element.quantity}</td>
				<td>{element.price}</td>
				
			</tr>
		));
  return (
		<div className='font-poppins  font-bold rounded-3xl bg-gray-800 w-3/4 p-8 h-full'>
				<h6 className = 'text-2xl font-medium'>Order Book</h6>
			<Grid>
				<Col span={6}>
				  <h6 className = 'text-base font-bold text-cyanBlue'>Buy</h6>
				  <div className=''>
					<Table  horizontalSpacing='xs'>
						<thead>
							<tr className = 'text-base'>
								<th>Quantity</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody className = 'font-medium'>{rows}</tbody>
					  </Table>
					</div>
				</Col>
				<Col span={6}>
					<h6 className = 'text-base font-bold text-purple'>Sell</h6>
					<Table horizontalSpacing='xs'>
						<thead>
							<tr className = 'text-base'>
								<th>Quantity</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody className = 'font-medium'>{rows}</tbody>
					</Table>
			  </Col>
			  <Col span={6}>
					
					<Table horizontalSpacing='xs' verticalSpacing='xs'>
						<thead>
							<tr className = 'text-base'>
								<th>Total</th>
								<th>100000</th>
							</tr>
						</thead>
					</Table>
			  </Col>
			  <Col span={6}>
					
					<Table horizontalSpacing='xs' verticalSpacing='xs'>
						<thead>
							<tr className = 'text-base'>
								<th>Total</th>
								<th>200000</th>
							</tr>
						</thead>
					</Table>
			  </Col>
			  
			</Grid>
		</div>
	);
}

export default OrderBook