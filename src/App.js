import React from 'react';
import { Row, Col, Typography, Button, Space } from 'antd';
import './App.css';

const { Title } = Typography;
const { Text } = Typography;

const App = () => (
	<div className="App">
		<Row>
			<Col align="center" span={12} offset={6}>
				<Title style={{ padding: '160px 0 0 0' }} type="primary" strong>
					Reuben M
				</Title>
				<Text code level={5}>
					does code stuff .
				</Text>
				<Col align="center" span={24} className="button_group">
					<Space>
						<Button large>Download resume</Button>
						<Button large>view projects</Button>
					</Space>
				</Col>
			</Col>
		</Row>
	</div>
);

export default App;
