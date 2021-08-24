import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paths } from '../../data/enum/paths';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

export const Routes: React.FC = observer(() => {
  return (
    <Router>
      <Switch>
        <Route path={Paths.ABOUT} component={AboutPage} />
        <Route exact path={Paths.INDEX} component={HomePage} />
      </Switch>
    </Router>
  );
});
