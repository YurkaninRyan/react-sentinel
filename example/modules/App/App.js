import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import GithubCorner from 'components/GithubCorner/GithubCorner';
import Navbar from 'components/Navbar/Navbar';

import ElementQueryExample from 'modules/ElementQueryExample/ElementQueryExample';
import AnimationExample from 'modules/AnimationExample/AnimationExample';

import 'styles/reset.scss';
import 'styles/typebase.scss';
import 'modules/App/App.scss';

const goToIndex = () => <Redirect to="/react-sentinel/element-query-example" />;

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <GithubCorner />
        <Route exact path="/" component={goToIndex} />
        <Route exact path="/react-sentinel/" component={goToIndex} />

        <Route path="/react-sentinel/element-query-example" component={ElementQueryExample} />
        <Route path="/react-sentinel/animation-example" component={AnimationExample} />
      </div>
    );
  }
}
