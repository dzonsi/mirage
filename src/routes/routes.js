import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
	TransitionGroup,
	CSSTransition
} from "react-transition-group";

import { HomeStyled as Home } from '../components/home/Home';
import { AllUsersStyled as Users } from '../components/users/AllUsers';
import { SingleUserConnected as User } from '../components/users/SingleUser';

const routes = (

	<Route
		render={({ location }) => {

			const { key } = location;

			return (
				<TransitionGroup>
					<CSSTransition
						timeout={300}
						classNames="page"
						key={key}
					>
						<Switch>
  		  			<Route exact path="/" render={() => <Home />}/>
  		  			<Route path="/users/:id/:resources" render={() => <h2>Resources</h2>}></Route>
  		  			<Route path="/users/:id" render={() => <User />}></Route>
  		  			<Route path="/users" render={() => <Users />}></Route>
  		  			<Route path="*" render={() => (<h2>No Match</h2>)}></Route>
  					</Switch>
  				</CSSTransition>
  			</TransitionGroup>
			);
		}}
	/>

);

export default routes;