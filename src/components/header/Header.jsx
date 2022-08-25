import React from 'react';
import './header.scss';
import { logo } from '../../assets/images';

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="header__nav">
          <li><a href="https://www.leagueoflegends.com/en-us/">overview</a></li>
          <li><a href="https://www.leagueoflegends.com/en-us/news/">news</a></li>
          <li><a href="https://www.leagueoflegends.com/en-us/champions/">champions</a></li>
          <li><a href="https://support.riotgames.com/hc/en-us/">support</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
