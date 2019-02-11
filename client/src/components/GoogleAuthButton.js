import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

const GoogleAuthButton = ({ isSignedIn }) => {
  const text = isSignedIn ? 'Logout' : 'Login with Google';
  const link = isSignedIn ? '/api/logout' : '/auth/google';
  const color = isSignedIn ? 'grey' : 'blue';
  if (isSignedIn === null) return null;
  return (
    <a href={link}>
      <Button color={color}>
        {!isSignedIn && <Icon name="google" />}
        {text}
      </Button>
    </a>
  );
};

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(GoogleAuthButton);
