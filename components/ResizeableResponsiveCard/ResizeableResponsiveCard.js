import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Resizeable from 're-resizable';
import Sentinel from '../../../src/index';
import DumbCard from '../DumbCard/DumbCard';
import Emoji from '../Emoji/Emoji';

import './ResizeableResponsiveCard.scss';

const LargeContent = ({ width }) => (
  [
    <h1 className="ResizeableResponsiveCard__title">Looping and setting props made easy <Emoji icon="🎉" /></h1>,
    <h2 className="ResizeableResponsiveCard__subtitle">Current Width: {width}px</h2>,
    <p className="ResizeableResponsiveCard__tidbit">
      You can use Sentinel for basically any usecase you would want
      to use requestAnimationFrame for.
      Including Element Queries, and even Animations.
    </p>,
    <p className="ResizeableResponsiveCard__tidbit is-bold">
      You can drag from the bottom right to make me larger!
    </p>,
  ]
);

const MediumContent = ({ width }) => (
  [
    <h1 className="ResizeableResponsiveCard__title">Efficient out of the box <Emoji icon="🎉" /></h1>,
    <h2 className="ResizeableResponsiveCard__subtitle">Current Width: {width}px</h2>,
    <p className="ResizeableResponsiveCard__tidbit">
      Sentinel will automatically shallow compare what you return, and
      will only update the wrapped component if something actually changes.
    </p>,
    <p className="ResizeableResponsiveCard__tidbit">
      if requestAnimationFrame is too heavy for you, setting the <code>lowPriority</code> prop
      will loop using requestIdleCallback!
    </p>,
  ]
);

const SmallContent = ({ width }) => (
  [
    <h1 className="ResizeableResponsiveCard__title">Thats it, just trying to keep it simple here.</h1>,
    <h2 className="ResizeableResponsiveCard__subtitle">Current Width: {width}px</h2>,
    <p className="ResizeableResponsiveCard__tidbit is-bold">
      There are definitely other ways of doing Element Queries
      and Animations.
    </p>,
    <p className="ResizeableResponsiveCard__tidbit">
      I often found myself writing
      requestAnimationFrame loops and hated it,
      so I decided to make it easier for myself and share it with all of you
    </p>,
  ]
);

export default class ResizeableResponsiveCard extends Component {
  getSize = () => {
    const width = this.container.offsetWidth;
    if (width < 485) {
      return {
        size: 'small',
        width,
      };
    }

    if (width < 600) return { size: 'medium', width };

    return { size: 'large', width };
  }

  permissions = {
    top: false,
    right: false,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: true,
    bottomLeft: false,
    topLeft: false,
  }

  renderCard = ({ size, width }) => {
    const { children } = this.props;
    return (
      <DumbCard size={size}>
        <div className="ResizeableResponsiveCard__content">
          {children}
          {size === 'small' && <SmallContent width={width} />}
          {size === 'medium' && <MediumContent width={width} />}
          {size === 'large' && <LargeContent width={width} />}
        </div>
      </DumbCard>
    );
  }

  render() {
    const { startSize } = this.props;
    return (
      <div className="ResizeableResponsiveCard" ref={el => this.container = el}>
        <Resizeable
          lockAspectRatio
          defaultSize={{ width: startSize, height: startSize }}
          enable={this.permissions}
          minWidth={300}
        >
          <Sentinel observe={this.getSize} render={this.renderCard} />
          <div className="ResizeableResponsiveCard__resizer" />
        </Resizeable>
      </div>
    );
  }
}

ResizeableResponsiveCard.propTypes = {
  children: PropTypes.element.isRequired,
  startSize: PropTypes.number,
};

ResizeableResponsiveCard.defaultProps = {
  startSize: 300,
};
