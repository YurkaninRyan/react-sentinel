import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import GithubCorner from 'components/GithubCorner/GithubCorner';
import Navbar from 'components/Navbar/Navbar';

import ElementQueryExample from 'modules/ElementQueryExample/ElementQueryExample';
import AnimationExample from 'modules/AnimationExample/AnimationExample';

import 'styles/reset.scss';
import 'styles/typebase.scss';
import 'modules/App/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <GithubCorner />
        <Switch>
          <Route path="/element-query-example" component={ElementQueryExample} />
          <Route path="/animation-example" component={AnimationExample} />
          <Redirect to="/element-query-example" />
        </Switch>
      </div>
    );
  }
}
