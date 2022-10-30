import React from 'react'
import { TextInput, Checkbox, Button, Group, Box,Select,Stack ,Space, MantineProvider,NumberInput} from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios'
import { useSelector } from 'react-redux';

const UpdateUser = () => {
 

	const form2 = useForm({
		initialValues: {
			id: null,
			stocks: 0,
			fiat: 0
		},

		// validate: {
		// 	email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		// },
	});

	const users = useSelector(state => state.appData.data)
	console.log('user portfolios: ')
	let userrs = []
	users['user_portfolios'].forEach(user => {
		userrs.push({
			value: user.id,
			label: user.user_name
		})
	})
	console.log(userrs)

	return (
		<div className="mx-48 h-screen flex space-x-10">
			<form
				onSubmit={form2.onSubmit((values) => {
					console.log(values);
					axios.post(
						`${process.env.NEXT_PUBLIC_BACKEND_URL}/update_user`,
						values
					);
					// TODO: send a post request to backend/adduser
				})}
			>
				<Stack
					spacing="xs"
					sx={(theme) => ({
						backgroundColor:
							theme.colorScheme === 'dark' ? '#00000' : theme.colors.gray[0],
						height: 220,
					})}
				>
					{/* <TextInput placeholder="name" label="Name" withAsterisk /> */}
					<Select
						label="User"
						data={userrs}
						onChange={(e) => console.log(e)}
						{...form2.getInputProps('id')}
					/>
					<Space w="md" />
					<NumberInput
						placeholder="stocks"
						label="Stocks"
						defaultValue={0}
						withAsterisk
						{...form2.getInputProps('stocks')}
					/>
					<Space w="md" />
					<NumberInput
						placeholder="fiat"
						label="Fiat"
						defaultValue={0}
						withAsterisk
						{...form2.getInputProps('fiat')}
					/>
					<Space w="xl" />

					<MantineProvider theme={{ primaryShade: { dark: 8 } }}>
						<Group position="center">
							<Button
								type="submit"
								variant="filled"
								color="blue"
								fullWidth
								className="bg-[#0c8ce9]"
							>
								Update User
							</Button>
						</Group>
					</MantineProvider>
				</Stack>
			</form>
		</div>
	);
}
export default UpdateUser