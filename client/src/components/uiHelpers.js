import React from 'react';
import NavBarLink from './NavBarLink';
import { Image } from 'semantic-ui-react';

export const navBarLeftItems = [
  <NavBarLink to="/">
    <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
  </NavBarLink>,
  <NavBarLink to="/surveys">Surveys</NavBarLink>,
];

export const navBarRightItems = [
  <NavBarLink to="/">
    <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
  </NavBarLink>,
  <NavBarLink to="/surveys">Surveys</NavBarLink>,
];
