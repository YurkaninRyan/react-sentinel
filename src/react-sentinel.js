import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Sentinel extends Component {
  constructor(props) {
    super();

    this.setLoopingFunctions(props.lowPriority);
    this.state = props.initial;
  }

  componentDidMount() {
    this.watch();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.lowPriority === this.props.lowPriority) return;

    // Make a clean slate, since we will be changing functions.
    this.stop();
    this.setLoopingFunctions(nextProps.lowPriority);
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
    const requestCheck = lowPriority
      ? window.requestIdleCallback || window.requestAnimationFrame
      : window.requestAnimationFrame;

    const cancelCheck = lowPriority
      ? window.cancelIdleCallback || window.cancelAnimationFrame
      : window.cancelAnimationFrame;

    /**
     *  FIREFOX COMPAT
     *  Chrome doesn't seem to mind not binding window, however
     *  FF throws up
     */

    this.requestCheck = requestCheck.bind(window);
    this.cancelCheck = cancelCheck.bind(window);
  };

  watchPID = null;
  checkPID = null;

  watch = () => {
    this.watchPID = window.setTimeout(() => {
      this.checkPID = this.requestCheck(this.check);
    }, 0);
  };

  stop = () => {
    clearTimeout(this.watchPID);
    this.cancelCheck(this.checkPID);

    this.watchPID = null;
    this.checkPID = null;
  };

  check = () => {
    const { observe } = this.props;
    const updates = observe(this.state);

    if (!updates) {
      return this.watch();
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

    return this.watch();
  };

  render() {
    return this.props.render(this.state);
  }
}

Sentinel.propTypes = {
  observe: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  lowPriority: PropTypes.bool,

  // eslint-disable-next-line react/forbid-prop-types
  initial: PropTypes.object,
};

Sentinel.defaultProps = {
  lowPriority: false,
  initial: {},
};
