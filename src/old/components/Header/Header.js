import React from 'react';
import ActionButton from '../ActionButton/ActionButton'
import './Header.css'

const Header = ({props}) => (
  <div className="header">
    <h1>Designer & developer</h1>
    <h2>Sean Verhaagen</h2>
    <ActionButton />
  </div>
);

export default Header;
