import { IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';

import Mlh from './pages/Mlh';
import Quiz from './pages/Quiz';
import QuizLeaderboard from './pages/QuizLeaderboard';
import Settings from './pages/Settings';
import Twitter from './pages/Twitter';
import Youtube from './pages/Youtube';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Update from './pages/UpdatePassword';
import About from './pages/About';

import ProtectedRoute from './ProtectedRoute';

function Router() {
	return (
		<IonRouterOutlet id='main'>
			<Route path='/' exact={true}>
				<Redirect to='/page/Mlh' />
			</Route>
			<Route path='/page/Mlh' exact={true} component={Mlh} />
			<ProtectedRoute path='/page/Quiz' exact={true} component={Quiz} />
			<Route
				path='/page/QuizLeaderboard'
				exact={true}
				component={QuizLeaderboard}
			/>
			<ProtectedRoute
				path='/page/Settings'
				exact={true}
				component={Settings}
			/>
			<Route path='/page/Twitter' exact={true} component={Twitter} />
			<Route path='/page/Youtube' exact={true} component={Youtube} />
			<Route path='/page/Login' exact={true} component={Login} />
			<Route path='/page/Register' exact={true} component={Register} />
			<ProtectedRoute
				path='/page/Update'
				exact={true}
				component={Update}
			/>
			<ProtectedRoute path='/page/About' exact={true} component={About} />
		</IonRouterOutlet>
	);
}

export default Router;
