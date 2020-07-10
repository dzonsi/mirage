import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { HomeStyled as Home } from '../components/home/Home';
import { AllUsersConnected as Users } from '../components/users/AllUsers';

const routes = (
	<Switch>
    <Route exact path="/" render={() => <Home />}/>
    <Route path="/users/:id" render={() => (<h2>User with id...</h2>)}></Route>
    <Route path="/users" render={() => <Users />}></Route>
    <Route path="*" render={() => (<h2>No Match</h2>)}></Route>
  </Switch>
);

export default routes;