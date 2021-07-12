import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

const App = () => (
  <Router basename="">
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
