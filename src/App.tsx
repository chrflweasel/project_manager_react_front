import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {routes} from "./config/routes";
import {Project} from "./features/project/Project";

function App() {
  return (
      <Switch>
          <Route path={routes.project.path} exact component={Project}/>
      </Switch>
  );
}

export default App;
