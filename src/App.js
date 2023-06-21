import axios from 'axios';
import {UserInfo} from './UserInfo';
import {DataSource} from './DataSource';

const getServerData = url => async () => {
	const response = await axios.get(url);
	return response.data;
};

function App() {
	return (
		<>
			<DataSource getDataFunc={getServerData('users/123')} resourceName={"user"}>
				<UserInfo />
			</DataSource>
		</>
	);
}

export default App;
