import React, { FC } from 'react';
import { ColorModeMap, ColorMode } from './Theme.types';
import { Button, Box, Text } from '@chakra-ui/core';
import { useColorMode } from './Theme.hooks';

const ThemeSetter: FC = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Box
      w="300px"
      textAlign="center"
      border="2px"
      borderRadius="md"
      borderColor="text.500"
      position="absolute"
      top={2}
      right={2}
      bg="tertiary.500"
    >
      <Text color="white" as="span">
        Current color mode: <Text fontWeight="bold">{colorMode}</Text>
      </Text>
      <div>
        {Object.keys(ColorModeMap).map((colorMode: ColorMode) => (
          <Button
            key={colorMode}
            variantColor="primary"
            onClick={() => setColorMode(colorMode)}
            m={2}
            size="sm"
          >
            {colorMode.toUpperCase()}
          </Button>
        ))}
      </div>
    </Box>
  );
};

export default ThemeSetter;
