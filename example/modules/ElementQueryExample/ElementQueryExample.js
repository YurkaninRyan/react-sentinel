import React, { Component } from 'react';
import Sentinel from 'react-sentinel';

import ResizeableResponsiveCard from 'components//ResizeableResponsiveCard/ResizeableResponsiveCard';
import Emoji from 'components/Emoji/Emoji';

import 'modules/ElementQueryExample/ElementQueryExample.scss';

export default class ElementQueryExample extends Component {
  constructor() {
    super();

    this.state = { numberOfCards: 0 };
  }
  getBodyWidth = () => ({ width: document.body.offsetWidth })
  getCards = () => {
    const { numberOfCards } = this.state;
    const cards = [];

    for (let i = 0; i < numberOfCards; i += 1) {
      cards.push(<ResizeableResponsiveCard key={i} />);
    }

    return cards;
  }

  addCard = () => this.setState(state => ({ numberOfCards: state.numberOfCards + 1 }))
  removeCard = () => this.setState(state => ({ numberOfCards: state.numberOfCards - 1 }))

  renderElementQueryExample = ({ width }) => (
    <div className="ElementQueryExample">
      <div className="ElementQueryExample__header">
        <h2 className="ElementQueryExample__title">Element Query Example</h2>
        <p className="ElementQueryExample__tidbit">
          Element queries allow you to work based on properties of any given node.
          With only media queries, you could only work with the
          fact that your browser window is currently {width}px <Emoji icon="😩" />
        </p>
        <div className="ElementQueryExample__buttons">
          <button className="ElementQueryExample__button is-cta" onClick={this.addCard}>Add a card</button>
          {this.state.numberOfCards ?
            <button className="ElementQueryExample__button" onClick={this.removeCard}>
              Remove a card
            </button> : null
          }
        </div>
      </div>
      <div className="ElementQueryExample__content">
        {this.getCards()}
        <ResizeableResponsiveCard startSize={425} />
        <ResizeableResponsiveCard startSize={325} />
        <ResizeableResponsiveCard startSize={240} />
      </div>
    </div>
  )

  render() {
    return <Sentinel observe={this.getBodyWidth} render={this.renderElementQueryExample} />;
  }
}
