import React, { Component } from 'react';
import Sentinel from '../../../src/index';
import ResizeableResponsiveCard from '../ResizeableResponsiveCard/ResizeableResponsiveCard';
import Emoji from '../Emoji/Emoji';

import './App.scss';
import '../../styles/reset.scss';
import '../../styles/typebase.scss';

export default class App extends Component {
  constructor() {
    super();

    this.state = { numberOfCards: 0 };
  }
  getBodyWidth = () => ({ width: document.body.offsetWidth })
  getCards = () => {
    const { numberOfCards } = this.state;
    const cards = [];

    for (let i = 0; i < numberOfCards; i += 1) {
      cards.push(<ResizeableResponsiveCard />);
    }

    return cards;
  }

  addCard = () => this.setState(state => ({ numberOfCards: state.numberOfCards + 1 }))
  removeCard = () => this.setState(state => ({ numberOfCards: state.numberOfCards - 1 }))

  renderApp = ({ width }) => (
    <div className="App">
      <div className="App__header">
        <h2 className="App__title">React Sentinel</h2>
        <p className="App__tidbit">
          With only media queries, you could only work with the
          fact that your browser window is currently {width}px <Emoji icon="😩" />
        </p>
        <div className="App__buttons">
          <button className="App__button is-cta" onClick={this.addCard}>Add a card</button>
          {this.state.numberOfCards ?
            <button className="App__button" onClick={this.removeCard}>
              Remove a card
            </button> : null
          }
        </div>
      </div>
      <div className="App__content">
        {this.getCards()}
        <ResizeableResponsiveCard startSize={600} />
        <ResizeableResponsiveCard startSize={485} />
        <ResizeableResponsiveCard startSize={325} />
      </div>
    </div>
  )

  render() {
    return <Sentinel observe={this.getBodyWidth} render={this.renderApp} />;
  }
}
