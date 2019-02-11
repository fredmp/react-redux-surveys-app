import React from 'react';
import { Image } from 'semantic-ui-react';

import NavBar from './NavBar';
import GoogleAuthButton from '../GoogleAuthButton';

const navBarLeftLinks = [
  {
    to: '/',
    key: 'landing',
    content: <Image size="mini" src="https://react.semantic-ui.com/logo.png" />,
  },
  { to: '/', key: 'home', content: 'Emaily' },
];

const navBarRightLinks = [
  {
    key: 'login',
    content: <GoogleAuthButton isSignedIn={false} />,
  },
];

const NavBarWrapper = () => {
  return <NavBar leftItems={navBarLeftLinks} rightItems={navBarRightLinks} />;
};

export default NavBarWrapper;
