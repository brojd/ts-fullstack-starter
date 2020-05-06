import React, { FC } from 'react';
import { Flex } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';
import { activeNavLink } from './Nav.styles';

const Nav: FC = () => {
  return (
    <Flex
      m="0 auto"
      w={200}
      justify="space-around"
      borderWidth="1px"
      borderColor="tertiary"
    >
      <NavLink to="/" activeStyle={activeNavLink} exact>
        Home
      </NavLink>
      <NavLink to="/todo-app" activeStyle={activeNavLink}>
        Todo App
      </NavLink>
    </Flex>
  );
};

export default Nav;
