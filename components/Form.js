import { TextInput, Checkbox, Button, Group, Box,Select,Stack ,Space} from '@mantine/core';
import { useForm } from '@mantine/form';

function Form() {
	const form = useForm({
		initialValues: {
			tradeChoice: '',
			termsOfService: false,
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	});

	return (
		<Box sx={{ maxWidth: 300 }} mx="auto">
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<Stack
					sx={(theme) => ({
						backgroundColor:
							theme.colorScheme === 'dark'
								? theme.colors.dark[8]
								: theme.colors.gray[0],
						height: 300,
					})}
				>
					<Select
						label=""
						placeholder="Buy"
						data={[
							{ value: 'buyLabel', label: 'Buy' },
							{ value: 'sellLabel', label: 'Sell' },
						]}
					/>
					<Select
						label=""
						placeholder="Select User"
						data={[
							{ value: 'user1Id', label: 'User 1' },
							{ value: 'user2Id', label: 'User 2' },
						]}
					/>
					<Select
						label=""
						placeholder="Order Type"
						data={[
							{ value: 'limitLabel', label: 'Limit' },
							{ value: 'marketLabel', label: 'Market' },
						]}
					/>
					<div style={{display:'flex'}}>
                        <TextInput placeholder="Stock Amount" label="" withAsterisk />
                        <Space w="md"/>
						<TextInput placeholder="At price" label="" withAsterisk />
					</div>

					<Group>
						<Button type="submit">Submit</Button>
					</Group>
				</Stack>
			</form>
		</Box>
	);
}

export default Form;
