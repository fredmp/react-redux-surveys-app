import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavBar = props => {
  const { leftItems, rightItems } = props;
  return (
    <div>
      <Menu fixed="top" inverted>
        {leftItems}
        <Menu.Menu position="right">{rightItems}</Menu.Menu>
      </Menu>
    </div>
  );
};

export default NavBar;
