import { TextInput, Checkbox, Button, Group, Box,Select,Stack ,Space, MantineProvider} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'

function Form() {

	const appData = useSelector(state => state.appData.data)

	const [orderType, setOrderType] = useState('limit')

	const submitValues = (values) => {

		// console.log(values)
		// validate the quantity > 0, price > 0
		// if (quantity <= 0 || price <= 0) {
		// 	// thwor error
		// 	return
		// }

		try {
			if (values.order_type === 'limit') {
				axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${values.mode}`, {
					user_id: values.user_id,
					order_type: values.order_type, 
					quantity: values.quantity,
					price: values.price
				})
			} else {
				axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${values.mode}`, {
					user_id: values.user_id,
					order_type: values.order_type, 
					quantity: values.quantity,
					price: values.price
				})
			}
		} catch (e) {
			console.log(e)
		}

	}

	const form = useForm({
		initialValues: {
			mode: 'buy',
			user_id: null,
			order_type: 'limit',
			quantity: 0,
			price: 0
		}
	});

	return (
		<div className='font-poppins text-2xl font-bold rounded-3xl bg-gray-800 w-3/4 p-5'>
		{/* {orderType} */}
		<Box sx={{ maxWidth: 300 }} mx="auto">
			<form onSubmit={form.onSubmit((values) => submitValues(values))}>
				<Stack spacing = 'xs'
					sx={(theme) => ({
						backgroundColor:
							theme.colorScheme === 'dark'
								? '#00000'
								: theme.colors.gray[0],
						height: 220,
					})}
				>
					<Select
						label=""
						// placeholder="Buy"
						data={[
							{ value: 'buy', label: 'Buy' },
							{ value: 'sell', label: 'Sell' },
						]}
						{...form.getInputProps('mode')}
						
					/>
					<Select
						label=""
						placeholder="Select User"
						data={ 
							appData['user_portfolios'].map(portfolio => (
								{
									value: portfolio.id,
									label: portfolio.user_name
								}
							)) 
						}
						{...form.getInputProps('user_id')}
					/>
					<Select
						label=""
						placeholder="Order Type"
						// onChange={(e) => {
						// 	console.log(e)
						// }}
						// ={setOrderType}
						data={[
							{ value: 'limit', label: 'Limit' },
							{ value: 'market', label: 'Market' },
						]}
						{...form.getInputProps('order_type')}
					/>
					<div style={{display:'flex'}}>
                        <TextInput placeholder="Quantity" label="" withAsterisk type='number' {...form.getInputProps('quantity')} />
                        <Space w="md"/>
						<TextInput placeholder="At price" label="" withAsterisk type='number' {...form.getInputProps('price')} />
					</div>

					<MantineProvider theme = {{primaryShade:{dark:8}}}>
					<Group position='center'>
						<Button type="submit" variant = "filled" color = "blue" fullWidth className = 'bg-[#0c8ce9]'>Place Order</Button>
					</Group>
					</MantineProvider>
				</Stack>
			</form>
			</Box>
			</div>
	);
}

export default Form;


{/* <form onSubmit={
	form.onSubmit((values) => console.log(values))}>
				
					
			</form> */}