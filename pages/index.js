import Head from 'next/head'
import { Button ,Grid,Col} from '@mantine/core'
import Form from '../components/Form'
import OrderBook from '../components/OrderBook'
import UserPortFolio from '../components/UserPortFolio'
import Transactions from '../components/Transactions'
import Graph from '../components/Graph'




export default function Home() {
  return (
		<div className="">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Grid>
          <Graph />
					<Col span={6}><Transactions/></Col>
					<Col span={6}><Transactions/></Col>
					<Col span={6}><Transactions/></Col>
					<Col span={6} className="flex justify-center">
						<OrderBook />
					</Col>
					<Col span={6} className="flex justify-center">
						<UserPortFolio />
					</Col>
					<Col span={6}>
						<Form></Form>
					</Col>
				</Grid>
			</main>
		</div>
	);
}
