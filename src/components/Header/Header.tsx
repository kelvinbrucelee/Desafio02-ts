import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box p={4} bg="teal.700" color="white">
      <Heading as="h1" size="xl">
        Dio Bank
      </Heading>
    </Box>
  );
};