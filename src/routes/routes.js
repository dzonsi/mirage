import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

const routes = (
	<Switch>
    <Route exact path="/" render={() => (<h2>Home</h2>)}/>
    <Route path="/users" render={() => (<h2>Users</h2>)}></Route>
    <Route path="*" render={() => (<h2>No Match</h2>)}></Route>
  </Switch>
);

export default routes;