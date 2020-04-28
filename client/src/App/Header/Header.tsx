import React, { FC } from 'react';
import { Heading, Flex, Icon } from '@chakra-ui/core';
import Nav from './Nav/Nav';

const Header: FC = () => {
  return (
    <>
      <Heading as="h1" color="text.500" py={3} fontSize="4rem">
        <Flex align="center" justify="center">
          TS-FULLSTACK-STARTER
          <Icon name="star" color="yellow.400" size="2rem" marginLeft={1} />
        </Flex>
      </Heading>
      <Nav />
    </>
  );
};

export default Header;
