import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppShell, EnterResponses, ResponseList } from './components';
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
            <EnterResponses />
          </Route>
          <Route path="/latest">
            <ResponseList />
          </Route>
        </Switch>
      </AppShell>
    </Router>
  );
}

export { App };
