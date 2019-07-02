import React from 'react';
import Login from '../Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import noMatch from '../nomatch';

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