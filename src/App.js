import {CurrentUserLoader} from './CurrentUserLoader';
import {UserLoader} from './UserLoader';
import {UserInfo} from './UserInfo';

function App() {
	return (
		<>
			<UserLoader userId='123'>
				<UserInfo />
			</UserLoader>

			<UserLoader userId='456'>
				<UserInfo />
			</UserLoader>

			<UserLoader userId='789'>
				<UserInfo />
			</UserLoader>
		</>
	);
}

export default App;
