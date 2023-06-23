import { UserInfo } from './UserInfo';
import { ProductInfo } from './ProductInfo';

function App() {
	return (
		<>
		<UserInfo userId="123" />
		<ProductInfo productId="1234" />
		<UserInfo userId="345" />
		</>
	);
}

export default App;
