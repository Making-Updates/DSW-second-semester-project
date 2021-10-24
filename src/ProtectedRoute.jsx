import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function ProtectedRoute({ component: Component, ...rest }) {
	const { user } = useAuth();

	return (
		<Route
			{...rest}
			render={(props) => {
				return user ? (
					<Component {...props} />
				) : (
					<Redirect to='/page/Login' />
				);
			}}
		></Route>
	);
}

export default ProtectedRoute;
