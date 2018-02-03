import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sentinel from '../../../src/index';
import DumbCard from '../DumbCard/DumbCard';

import './ResizeableResponsiveCard.scss';

export default class ResizeableResponsiveCard extends Component {
  getSize = () => {
    const width = this.container.offsetWidth;
    if (width < 450) return { size: 'small', text: `At ${width}px or less I get small!` };
    if (width < 650) return { size: 'medium', text: `At ${width}px or less i'm average!` };

    return { size: 'large', text: `At ${width}px or less I get big!` };
  }

  renderCard = ({ size, text }) => {
    const { children } = this.props;
    return (
      <DumbCard size={size}>
        <div className="ResizeableResponsiveCard__content">
          {children}
          {text}
        </div>
      </DumbCard>
    );
  }

  render() {
    return (
      <div className="ResizeableResponsiveCard" ref={el => this.container = el}>
        <Sentinel observe={this.getSize} render={this.renderCard} />
      </div>
    );
  }
}

ResizeableResponsiveCard.propTypes = {
  children: PropTypes.element.isRequired,
};
