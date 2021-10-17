import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

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

import { supabase } from './supabase';

import { UserContext } from './context/UserContext';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

function Router() {
	const history = useHistory();
	const supabaseUser = supabase.auth.user();
	const [user, setUser] = useContext(UserContext);

	useEffect(() => {
		if (supabaseUser !== null && supabaseUser !== undefined)
			setUser(supabaseUser.email);
	}, [user]);
	return (
		<IonRouterOutlet id='main'>
			<Route path='/' exact={true}>
				{user !== 'Not Logged In' ? (
					<Redirect to='/page/Mlh' />
				) : (
					<Redirect to='/page/Login' />
				)}
			</Route>
			<Route path='/page/Mlh' exact={true}>
				{user !== 'Not Logged In' ? (
					<Mlh />
				) : (
					<Redirect to='/page/Login' />
				)}
			</Route>
			<Route path='/page/Quiz' exact={true}>
				{user !== 'Not Logged In' ? (
					<Quiz />
				) : (
					<Redirect to='/page/Login' />
				)}
			</Route>
			<Route path='/page/QuizLeaderboard' exact={true}>
				<QuizLeaderboard />
			</Route>
			<Route path='/page/Settings' exact={true}>
				{user !== 'Not Logged In' ? (
					<Settings />
				) : (
					<Redirect to='/page/Login' />
				)}
			</Route>
			<Route path='/page/Twitter' exact={true}>
				{user !== 'Not Logged In' ? (
					<Twitter />
				) : (
					<Redirect to='/page/Login' />
				)}
			</Route>
			<Route path='/page/Youtube' exact={true}>
				{user !== 'Not Logged In' ? (
					<Youtube />
				) : (
					<Redirect to='/page/Login' />
				)}
			</Route>
			<Route path='/page/Login' exact={true}>
				<Login />
			</Route>
			<Route path='/page/Register' exact={true}>
				<Register />
			</Route>
			<Route path='/page/Update' exact={true}>
				{user !== 'Not Logged In' ? (
					<Update />
				) : (
					<Redirect to='/page/Login' />
				)}
			</Route>
			<Route path='/page/About' exact={true}>
				{user !== 'Not Logged In' ? (
					<About />
				) : (
					<Redirect to='/page/Login' />
				)}
			</Route>
		</IonRouterOutlet>
	);
}

export default Router;
