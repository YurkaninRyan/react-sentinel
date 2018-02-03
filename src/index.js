import { PureComponent } from 'react';
import PropTypes from 'prop-types';

const requestCheck = window.requestIdleCallback || window.requestAnimationFrame;
const cancelCheck = window.cancelIdleCallback || window.cancelAnimationFrame;

class Sentinel extends PureComponent {
  constructor(props) {
    super();

    this.setLoopingFunctions(props.lowPriority);
  }

  state = {}

  componentDidMount() { this.watch(); }
  componentWillReceiveProps(nextProps) {
    if (nextProps.lowPriority === this.props.lowPriority) return;

    // Make a clean slate, since we will be changing functions.
    clearTimeout(this.watchPID);
    this.cancelCheck(this.checkPID);

    this.setLoopingFunctions(nextProps.lowPriority);
    this.watch();
  }

  componentWillUnmount() {
    clearTimeout(this.watchPID);
    cancelCheck(this.checkPID);
  }

  setLoopingFunctions = (lowPriority) => {
    // Low priority means use requestIdleCallback
    // fallback to requestAnimationFrame
    this.requestCheck = lowPriority ?
      requestIdleCallback || requestAnimationFrame : requestAnimationFrame;

    this.cancelCheck = lowPriority ?
      cancelIdleCallback || cancelAnimationFrame : cancelAnimationFrame;
  }

  watchPID = null;
  checkPID = null;

  watch = () => {
    this.watchPID = window.setTimeout(() => {
      this.checkPID = requestCheck(this.check);
    }, 0);
  };

  check = () => {
    const { observe } = this.props;
    const updates = observe(this.props);

    if (!updates) { return this.watch(); }
    const oldProps = Object.keys(this.state);
    const newProps = Object.keys(updates);

    // first, naive check to see if lengths are different.
    // If that doesn't pass, shallow compare all the keys in both objects.
    const mismatch = oldProps.length !== newProps.length ||
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
};

Sentinel.defaultProps = {
  lowPriority: false,
};

export default Sentinel;
