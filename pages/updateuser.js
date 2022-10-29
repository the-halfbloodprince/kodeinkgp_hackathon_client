import React from 'react'
import { TextInput, Checkbox, Button, Group, Box,Select,Stack ,Space, MantineProvider} from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios'
import { useSelector } from 'react-redux';

const AddUser = () => {

    const form = useForm({
		initialValues: {
			name: '',
			stocks: 0,
			fiat: 0
		},

		// validate: {
		// 	email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		// },
	});

	const appData = useSelector(state => state)
	console.log('user portfolios: ')
	console.log(appData)

  return (
    <div className='mx-48 h-screen flex space-x-10'>
		{/* add user */}
        <form onSubmit={
            form.onSubmit((values) => {
                console.log('values to be submitted: ')
                console.log(values)
				axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/addUser`, values)
            })}>
				<Stack spacing = 'xs'
					sx={(theme) => ({
						backgroundColor:
							theme.colorScheme === 'dark'
								? '#00000'
								: theme.colors.gray[0],
						height: 220,
					})}
				>
					
					{/* <div style={{display:'flex'}}> */}
                    <TextInput placeholder="name" label="Name" withAsterisk {...form.getInputProps('name')}  />
                    <Space w="md"/>
                    <TextInput placeholder="stocks" label="Stocks" withAsterisk {...form.getInputProps('stocks')} />
                    <Space w="md"/>
                    <TextInput placeholder="fiat" label="Fiat" withAsterisk {...form.getInputProps('fiat')} />
                    <Space w="xl"/>
					{/* </div> */}

					<MantineProvider theme = {{primaryShade:{dark:8}}}>
                        <Group position='center'>
                            <Button type="submit" variant = "filled" color = "blue" fullWidth className = 'bg-[#0c8ce9]'>Add User</Button>
                        </Group>
					</MantineProvider>
				</Stack>
			</form>

			{/* update user */}
			{/* <form onSubmit={
            form.onSubmit((values) => {
                console.log(values)
				axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/updateUser`, values)
                // TODO: send a post request to backend/adduser
            })}>
				<Stack spacing = 'xs'
					sx={(theme) => ({
						backgroundColor:
							theme.colorScheme === 'dark'
								? '#00000'
								: theme.colors.gray[0],
						height: 220,
					})}
				>
					
                    <TextInput placeholder="name" label="Name" withAsterisk />
                    <Space w="md"/>
                    <TextInput placeholder="stocks" label="Stocks" withAsterisk />
                    <Space w="md"/>
                    <TextInput placeholder="fiat" label="Fiat" withAsterisk />
                    <Space w="xl"/>
					
					<MantineProvider theme = {{primaryShade:{dark:8}}}>
                        <Group position='center'>
                            <Button type="submit" variant = "filled" color = "blue" fullWidth className = 'bg-[#0c8ce9]'>Update User</Button>
                        </Group>
					</MantineProvider>
				</Stack>
			</form> */}
    </div>
  )
}

export default AddUser