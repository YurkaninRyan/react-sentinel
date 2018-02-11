import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sentinel from 'react-sentinel';

import 'components/AnimatingSquare/AnimatingSquare.scss';

export default class AnimatingSquare extends Component {
  animate = ({ scale, rotate, shrinking }) => {
    const needsToShrinkMore = shrinking && scale > 0;
    const needsToStartShrinking = !shrinking && scale >= 1;

    if (needsToStartShrinking || needsToShrinkMore) {
      return {
        scale: (scale - 0.01),
        rotate: (rotate + 9),
        shrinking: true,
      };
    }

    return {
      scale: (scale + 0.01),
      rotate: (rotate + 9),
      shrinking: false,
    };
  }

  initial = { scale: 0, rotate: 0 }

  renderSquare = ({ scale, rotate }) => {
    const style = { transform: `scale(${scale}) rotateZ(${rotate}deg)` };
    return (
      <div
        className="AnimatingSquare"
        style={style}
      />
    );
  }

  render() {
    const { priority } = this.props;

    return (
      <Sentinel
        initial={this.initial}
        lowPriority={!priority}
        observe={this.animate}
        render={this.renderSquare}
      />
    );
  }
}

AnimatingSquare.propTypes = { priority: PropTypes.bool.isRequired };

