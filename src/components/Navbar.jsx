import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        fontFamily={'heading'}
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text>PokeAPI</Text>
        </Flex>
        <Flex>
          <Box mr={3}>
            <NavLink to={'/'}>
              <Text>Inicio</Text>
            </NavLink>
          </Box>
          <Box>
            <NavLink to={'/pokedex'}>
              <Text>Pokedex</Text>
            </NavLink>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
