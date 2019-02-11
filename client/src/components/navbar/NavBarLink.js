import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default ({ to, children }) => {
  return (
    <Menu.Item>
      {to ? <Link to={to}>{children}</Link> : <React.Fragment>{children}</React.Fragment>}
    </Menu.Item>
  );
};
