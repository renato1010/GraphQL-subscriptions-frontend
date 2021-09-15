import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppShell } from './components';
import { UserProfile } from 'lib';

function App(): JSX.Element {
  const dummyUser: UserProfile = {
    name: 'Renato',
    lastName: 'Perez',
    picture: 'https://en.gravatar.com/userimage/98563751/815e6d570ad39b0664b876d4d7c77b47.png',
  };
  return (
    <Router>
      <AppShell user={dummyUser}>
        <Switch>
          <Route path="/" exact>
            <h2>home</h2>
          </Route>
          <Route path="/latest">
            <h2>latest</h2>
          </Route>
        </Switch>
      </AppShell>
    </Router>
  );
}

export { App };
