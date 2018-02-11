import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'components/DumbCard/DumbCard.scss';

export default class DumbCard extends Component {
  render() {
    const { size, children } = this.props;

    return (
      <div className={`DumbCard is-${size}`}>
        <div className="DumbCard__content">
          <div className="DumbCard__side-banner" />
          {children}
        </div>
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
