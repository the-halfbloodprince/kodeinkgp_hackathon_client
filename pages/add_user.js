import React from 'react';
import {
	TextInput,
	Checkbox,
	Button,
	Group,
	Box,
	Select,
	Stack,
	Space,
	MantineProvider,
	NumberInput
} from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AddUser = () => {
	const form1 = useForm({
		initialValues: {
			name: '',
			stocks: 0,
			fiat: 0,
		},

		// validate: {
		// 	email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		// },
	});


	const users = useSelector((state) => state.appData.data);
	console.log('user portfolios: ');
	let userrs = [];
	users['user_portfolios'].forEach((user) => {
		userrs.push({
			value: user.id,
			label: user.name_name,
		});
	});
	console.log(userrs);

	return (
		<div className="mx-48 h-screen flex space-x-10">
			{/* add user */}
			<form
				onSubmit={form1.onSubmit((values) => {
					console.log('values to be submitted: ');
					console.log(values);
					axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/add_user`, values);
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
					{/* <div style={{display:'flex'}}> */}
					<TextInput
						placeholder="name"
						label="Name"
						withAsterisk
						{...form1.getInputProps('name')}
					/>
					<Space w="md" />
					<NumberInput
						defaultValue={0}
						label="Stocks"
						withAsterisk
						{...form1.getInputProps('stocks')}
					/>
					<Space w="md" />
					<NumberInput
						placeholder="fiat"
						defaultValue={0}
						label="Fiat"
						withAsterisk
						{...form1.getInputProps('fiat')}
					/>
					<Space w="xl" />
					{/* </div> */}

					<MantineProvider theme={{ primaryShade: { dark: 8 } }}>
						<Group position="center">
							<Button
								type="submit"
								variant="filled"
								color="blue"
								fullWidth
								className="bg-[#0c8ce9]"
							>
								Add User
							</Button>
						</Group>
					</MantineProvider>
				</Stack>
			</form>
		</div>
	);
};

export default AddUser;
