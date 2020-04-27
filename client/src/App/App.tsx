import React, { useEffect } from 'react';
import { dummyConsoleLog } from '@shared/utils/console';
import styles from './App.module.scss';
import './App.global.scss';
import { getTodos } from '../api/todos';
import { CSSReset, Box, Icon, Heading, Flex } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Theme from './Theme/Theme';
import WithColorModeContext from './Theme/WithColorModeContext';
import ThemeSetter from './Theme/ThemeSetter';

const StyledDiv = styled.div`
  height: 30px;
  width: 300px;
  color: red;
  border: 2px solid red;
`;

const App = () => {
  useEffect(() => {
    getTodos().then(({ data: todos }) => {
      dummyConsoleLog(todos[0].text);
    });
  }, []);

  return (
    <WithColorModeContext>
      <Theme>
        <CSSReset />
        <Box bg="secondary.400" h="100vh" className={styles.root}>
          <ThemeSetter />
          <Heading as="h1" color="text.500" py={3} fontSize="4rem">
            <Flex align="center" justify="center">
              TS-FULLSTACK-STARTER
              <Icon name="star" color="yellow.400" size="2rem" marginLeft={1} />
            </Flex>
          </Heading>
          <Box marginTop={16}>
            <StyledDiv>You can use Styled Components</StyledDiv>
            <p className={styles.pink}>You can use CSS Modules</p>
            <p className="blue">...or standard global classes</p>
          </Box>
        </Box>
      </Theme>
    </WithColorModeContext>
  );
};

export default App;
