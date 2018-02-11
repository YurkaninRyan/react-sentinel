import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import 'components/Emoji/Emoji.scss';

export default class Emoji extends PureComponent {
  render() {
    const { icon } = this.props;
    return (
      <span className="Emoji">
        {icon}
      </span>
    );
  }
}

Emoji.propTypes = {
  icon: PropTypes.string.isRequired,
};
