import _ from 'lodash';
import React from 'react';
import { Menu } from 'semantic-ui-react';

import NavBarLink from './NavBarLink';

const NavBar = props => {
  const { leftItems, rightItems } = props;
  return (
    <div>
      <Menu fixed="top" inverted>
        {_.map(leftItems, item => (
          <NavBarLink to={item.to} key={item.key}>
            {item.content}
          </NavBarLink>
        ))}
        <Menu.Menu position="right">
          {_.map(rightItems, item => (
            <NavBarLink to={item.to} key={item.key}>
              {item.content}
            </NavBarLink>
          ))}
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default NavBar;
