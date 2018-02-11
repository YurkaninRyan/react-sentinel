import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'components/Navbar/Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar__name">Sentinel</div>
        <ul className="Navbar__links">
          <li>
            <Link className="Navbar__link" to="/element-query-example">Element Query Example</Link>
          </li>
          <li>
            <Link className="Navbar__link" to="/animation-example">Animation Example</Link>
          </li>
        </ul>
      </div>
    );
  }
}
