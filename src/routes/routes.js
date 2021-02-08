import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { HomeStyled as Home } from '../components/home/Home';
import { AllUsersStyled as Users } from '../components/users/AllUsers';
import { SingleUserConnected as User } from '../components/users/SingleUser';

const routes = (

	<Route
		render={({ location }) => {

			return (
				<Switch location={location}>
  		  	<Route exact path="/" render={() => <Home />}/>
  		  	<Route path="/users/:id/:resources" render={() => <h2>Resources</h2>}></Route>
  		  	<Route path="/users/:id" render={() => <User />}></Route>
  		  	<Route path="/users" render={() => <Users />}></Route>
  		  	<Route path="*" render={() => (<h2>No Match</h2>)}></Route>
  			</Switch>
			);

		}}
	/>

);

export default routes;