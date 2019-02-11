import React from 'react';
import { Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import GoogleAuthButton from '../GoogleAuthButton';
import Payment from '../Payment';

class NavBarWrapper extends React.Component {
  render() {
    const navBarLeftLinks = [
      {
        to: '/',
        key: 'landing',
        content: <Image size="mini" src="https://react.semantic-ui.com/logo.png" />,
      },
      { to: '/', key: 'home', content: 'Emaily' },
    ];

    const { user } = this.props;
    const { credits } = user || {};
    const navBarRightLinks = [];
    navBarRightLinks.push({ key: 'payments', content: <Payment /> });
    if (credits !== undefined) {
      navBarRightLinks.push({ key: 'credits', content: `Credits: ${credits}` });
    }
    navBarRightLinks.push({ key: 'login', content: <GoogleAuthButton isSignedIn={false} /> });

    return <NavBar leftItems={navBarLeftLinks} rightItems={navBarRightLinks} />;
  }
}

export default connect(state => ({ user: state.auth.user }))(NavBarWrapper);
