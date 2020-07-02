import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { HomeStyled as Home } from '../components/home/Home';

const routes = (
	<Switch>
    <Route exact path="/" render={() => <Home />}/>
    <Route path="/users" render={() => (<h2>Users</h2>)}></Route>
    <Route path="*" render={() => (<h2>No Match</h2>)}></Route>
  </Switch>
);

export default routes;