import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/core';

const Footer: FC = () => {
  return (
    <Box
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      textAlign="center"
      bg="tertiary.300"
    >
      <Text color="textOpposite.500" fontWeight="bold">
        2020
      </Text>
    </Box>
  );
};

export default Footer;
