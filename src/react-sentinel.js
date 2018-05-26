import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Sentinel extends Component {
  constructor({ lowPriority, initial }) {
    super();

    this.setLoopingFunctions(lowPriority);
    this.state = initial;
  }

  componentDidMount() {
    this.watch();
  }

  componentDidUpdate({ lowPriority: previousLowPriority }) {
    const { lowPriority } = this.props;
    if (lowPriority === previousLowPriority) return;

    // Make a clean slate, since we will be changing functions.
    this.stop();
    this.setLoopingFunctions(lowPriority);
    this.watch();
  }

  componentWillUnmount() {
    this.stop();
  }

  setLoopingFunctions = (lowPriority) => {
    /**
     *  SAFARI COMPAT:
     *  requestIdleCallback doesn't exist, so we need to check for it on window.
     */
    const observe = lowPriority
      ? window.requestIdleCallback || window.requestAnimationFrame
      : window.requestAnimationFrame;

    const kill = lowPriority
      ? window.cancelIdleCallback || window.cancelAnimationFrame
      : window.cancelAnimationFrame;

    /**
     *  FIREFOX COMPAT
     *  Chrome doesn't seem to mind not binding window, however
     *  FF throws up
     */
    this.observe = observe.bind(window);
    this.kill = kill.bind(window);
  };

  watch = () => {
    this.observer = this.observe(this.deriveUpdatesByObserving);
  };

  stop = () => {
    // No-op, there is no observation happening.
    if (!this.observer) { return; }

    this.kill(this.observer);
    this.observer = null;
  };

  deriveUpdatesByObserving = () => {
    const { observe, interval } = this.props;
    const updates = observe(this.state);

    if (!updates) {
      return interval ?
        window.setTimeout(this.watch, interval) : this.watch();
    }

    const oldProps = Object.keys(this.state);
    const newProps = Object.keys(updates);

    // first, naive check to see if lengths are different.
    // If that doesn't pass, shallow compare all the keys in both objects.
    const mismatch =
      oldProps.length !== newProps.length ||
      oldProps.some(currPropKey => this.state[currPropKey] !== updates[currPropKey]) ||
      newProps.some(currPropKey => updates[currPropKey] !== this.state[currPropKey]);

    if (mismatch) {
      this.setState(updates);
    }

    return interval ?
      window.setTimeout(this.watch, interval) : this.watch();
  };

  render() {
    return this.props.render(this.state);
  }
}

Sentinel.propTypes = {
  observe: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  lowPriority: PropTypes.bool,
  interval: PropTypes.number,

  // eslint-disable-next-line react/forbid-prop-types
  initial: PropTypes.object,
};

Sentinel.defaultProps = {
  lowPriority: false,
  initial: {},
  interval: null,
};
