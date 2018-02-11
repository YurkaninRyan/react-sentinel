import React, { Component } from 'react';
import AnimatingSquare from 'components/AnimatingSquare/AnimatingSquare';

import 'modules/AnimationExample/AnimationExample.scss';

export default class AnimationExample extends Component {
  constructor() {
    super();

    this.state = { numberOfSquares: 0, priority: true };
  }
  getBodyWidth = () => ({ width: document.body.offsetWidth })
  getSquares = () => {
    const { numberOfSquares, priority } = this.state;
    const squares = [];

    for (let i = 0; i < numberOfSquares; i += 1) {
      squares.push(<AnimatingSquare key={i} priority={priority} />);
    }

    return squares;
  }

  addSquare = () => this.setState(state => ({ numberOfSquares: state.numberOfSquares + 1 }))
  removeSquare = () => this.setState(state => ({ numberOfSquares: state.numberOfSquares - 1 }))
  togglePriority = () => this.setState(state => ({ priority: !state.priority }))

  render() {
    const { priority } = this.state;

    return (
      <div className="AnimationExample">
        <div className="AnimationExample__header">
          <h2 className="AnimationExample__title">Animation Example Demo</h2>
          <p className="AnimationExample__tidbit">
            Since its all requestAnimationFrame under the hood, you could
            use React Sentinel to create performant animations! If you switch to low priority,
            the animations may stop sporadically, but the UI thread shouldnt drop frames!
          </p>
          <div className="AnimationExample__buttons">
            <button className="AnimationExample__button is-cta" onClick={this.addSquare}>Add a square</button>
            {this.state.numberOfSquares ?
              <button className="AnimationExample__button" onClick={this.removeSquare}>
                Remove a square
              </button> : null
            }
            <button className="AnimationExample__button" onClick={this.togglePriority}>Switch to { priority ? 'low' : 'high'} priority</button>
          </div>
        </div>
        <div className="AnimationExample__content">
          <AnimatingSquare priority={priority} />
          <AnimatingSquare priority={priority} />
          {this.getSquares()}
        </div>
      </div>
    );
  }
}
