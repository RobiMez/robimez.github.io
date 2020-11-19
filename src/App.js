import React from 'react';
import { Row, Col, Typography, Button, Space } from 'antd';
import './App.css';

const { Title } = Typography;
const { Text } = Typography;

const App = () => (
	<div className="App">
		<Row>
			{/*player stats*/}
			<Col align="center" span={12} offset={6}>
				<Title className="t-w Title">Reuben M</Title>
				<Text code level={5} className="t-w">
					does code stuff .
				</Text>
				<Col align="center" span={24} className="button_group">
					<Space>
						<Button large ghost>
							Download resume
						</Button>
						<Button large ghost>
							view projects
						</Button>
					</Space>
				</Col>
			</Col>
		</Row>
	</div>
);

export default App;
