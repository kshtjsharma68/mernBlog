import React from 'react';
import Login from '../Login';
import Home from '../../Users/components/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import noMatch from '../../Users/components/nomatch';

const Routes = _ => {
	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/login"
					component={Login}
				/>
				<Route
					exact
					path="/"
					component={Login}
				/>
				<Route 
					exact
					path="/home"
					component={Home}
				/>
				<Route 
					path="/404"
					component={noMatch}
				/>
				<Route 
					path="*"
					component={noMatch}
				/>
				<Redirect to="/404"/>
			</Switch>
		</Router>	
		);
}

export default Routes;