import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default ({ to, children }) => {
  return (
    <Menu.Item>
      <Link to={to}>{children}</Link>
    </Menu.Item>
  );
};
