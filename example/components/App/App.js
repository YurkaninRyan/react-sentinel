import React, { PureComponent } from 'react';
import Sentinel from '../../../src/index';
import ResizeableResponsiveCard from '../ResizeableResponsiveCard/ResizeableResponsiveCard';

import './App.scss';
import '../../styles/reset.scss';

export default class App extends PureComponent {
  getBodyWidth = () => ({ width: document.body.offsetWidth })
  renderApp = ({ width }) => (
    <div className="App">
      <div className="App__header">
        <h1 className="App__title">React Sentinel</h1>
        <p>Resize the window and watch as our values update automatically!</p>
        <p>The window size is {width}px!</p>
      </div>
      <ResizeableResponsiveCard />
    </div>
  )

  render() {
    return <Sentinel observe={this.getBodyWidth} render={this.renderApp} />;
  }
}
