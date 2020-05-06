import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Box, Text, Heading } from '@chakra-ui/core';
import styles from './Home.module.scss';
import './Home.global.scss';

const StyledDiv = styled.div`
  color: red;
  font-weight: bold;
`;

const Home: FC = () => {
  return (
    <Box marginTop={16} textAlign="center" className={styles.root}>
      <Heading as="h2" fontSize="2rem" marginBottom={8}>
        How to style?
      </Heading>
      <Text color="primary.300" fontWeight="bold" fontSize="1.5rem">
        Preferably use Chakra's component style props
      </Text>
      <StyledDiv>But you can use Styled Components too</StyledDiv>
      <p className={styles.purple}>...or CSS Modules</p>
      <p className="blue">...or standard global classes</p>
    </Box>
  );
};

export default Home;
