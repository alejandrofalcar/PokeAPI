import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Stack,
  Checkbox,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

export function ModalPokemon({ pokemon, isOpen, onClose }) {
  const [secondTypePokemon, setSecondTypePokemon] = useState([]);
  const [firstTypePokemon, setFirstTypePokemon] = useState([]);
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);

  function toggleValueFirst(type) {
    setFirstChecked(oldValue => {
      const newValue = !oldValue;
      if (newValue) {
        fetchFirstType(type);
      } else {
        setFirstTypePokemon([]);
      }
      return newValue;
    });
  }

  function toggleValueSecond(type) {
    setSecondChecked(oldValue => {
      const newValue = !oldValue;
      if (newValue) {
        fetchSecondType(type);
      } else {
        setSecondTypePokemon([]);
      }
      return newValue;
    });
  }
  const fetchFirstType = type => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}`)
      .then(response => {
        setFirstTypePokemon(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fetchSecondType = type => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}`)
      .then(response => {
        setSecondTypePokemon(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  let elementToRender = null;

  if (firstChecked) {
    elementToRender = firstTypePokemon.pokemon?.map(pokemon => (
      <Text key={pokemon?.pokemon.name}>{pokemon?.pokemon.name}</Text>
    ));
  } else {
    elementToRender = secondTypePokemon.pokemon?.map(pokemon => (
      <Text key={pokemon?.pokemon.name}>{pokemon?.pokemon.name}</Text>
    ));
  }

  if (firstChecked && secondChecked) {
    const firstMap = firstTypePokemon.pokemon?.map(
      pokemon => pokemon.pokemon.name
    );
    const secondMap = secondTypePokemon.pokemon?.map(
      pokemon => pokemon.pokemon.name
    );

    let sameTypePokemon = [];
    sameTypePokemon = firstMap?.filter(pokemon => secondMap?.includes(pokemon));

    elementToRender = sameTypePokemon?.map(pokemon => (
      <div key={pokemon}>{pokemon}</div>
    ));
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filtro de tipos</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Stack spacing={5}>
            {pokemon?.types && (
              <Box>
                <Checkbox
                  size="md"
                  key={pokemon.types[0].type.name}
                  isChecked={firstChecked}
                  onChange={() => toggleValueFirst(pokemon.types[0].type.name)}
                  mr={5}
                >
                  {pokemon.types[0].type.name}
                </Checkbox>
                {pokemon?.types[1] && (
                  <Checkbox
                    size="md"
                    key={pokemon.types[1].type.name}
                    checked={secondChecked}
                    onChange={() =>
                      toggleValueSecond(pokemon.types[1].type.name)
                    }
                  >
                    {pokemon.types[1].type.name}
                  </Checkbox>
                )}
              </Box>
            )}
          </Stack>
          <Box>{elementToRender}</Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
