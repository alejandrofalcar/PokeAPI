import { Flex, Box, Text } from '@chakra-ui/react';

export function Homepage() {
  return (
    <Flex p={4} alignItems={'center'} justifyContent={'center'}>
      <Box width={700} bg={'gray.300'} rounded={'xl'} p={5}>
        <Text>
          PokeAPI es una aplicación Front-End que se conecta a una API gratuita
          llamada PokeApi, y facilita la visualización y búsqueda de pokemon a
          través de una interfaz minimalista. Esta aplicación fue desarrollada
          con el objetivo de poner en práctica conceptos de React como el uso de
          Hooks, Custom Hooks y Routes. Además, el uso de nuevas tecnologías:
          ChakraUI como CSS Framework.
        </Text>
      </Box>
    </Flex>
  );
}
