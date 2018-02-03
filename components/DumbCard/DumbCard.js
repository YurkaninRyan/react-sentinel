import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DumbCard.scss';

export default class DumbCard extends Component {
  render() {
    const { size, children } = this.props;

    return (
      <div className={`DumbCard is-${size}`}>
        {children}
      </div>
    );
  }
}

DumbCard.propTypes = {
  size: PropTypes.string,
  children: PropTypes.element.isRequired,
};

DumbCard.defaultProps = {
  size: 'large',
};
