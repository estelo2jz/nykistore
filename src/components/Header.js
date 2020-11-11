import React, { Component } from 'react';
import Menu from './svg/bars-solid.svg';
import CartIcon from './svg/cart-plus-solid.svg';
import Close from './svg/times-solid.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Header>
        <div className="menu">
          <img src={Menu} alt="" width="20" />
        </div>
        <div className="logo">
          <h1><Link to="/">Nyki</Link></h1>
        </div>
      </Header>
    )
  }
}
