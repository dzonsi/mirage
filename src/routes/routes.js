import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
	TransitionGroup,
	CSSTransition
} from "react-transition-group";
import styled from 'styled-components';

import { HomeStyled as Home } from '../components/home/Home';
import { AllUsersStyled as Users } from '../components/users/AllUsers';
import { SingleUserConnected as User } from '../components/users/SingleUser';

const TransitionGroupStyled = styled(TransitionGroup)`
	position: relative;
`;// height of this element is important

const routes = (

	<Route
		render={({ location }) => {

			const { key } = location;

			return (
				<TransitionGroupStyled>
					<CSSTransition
						timeout={300}
						classNames="page"
						key={key}
					>
						<Switch location={location}>
  		  			<Route exact path="/" render={() => <Home />}/>
  		  			<Route path="/users/:id/:resources" render={() => <h2>Resources</h2>}></Route>
  		  			<Route path="/users/:id" render={() => <User />}></Route>
  		  			<Route path="/users" render={() => <Users />}></Route>
  		  			<Route path="*" render={() => (<h2>No Match</h2>)}></Route>
  					</Switch>
  				</CSSTransition>
  			</TransitionGroupStyled>
			);
		}}
	/>

);

export default routes;