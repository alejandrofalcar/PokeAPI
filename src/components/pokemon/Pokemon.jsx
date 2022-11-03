import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Heading,
  Badge,
  Text,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowLeftIcon, SearchIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ModalPokemon } from './ModalPokemon';
import { backgroundPokemon } from '../styles';

export function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name } = useParams();

  const fetchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      color={'white'}
      align={'center'}
      p={5}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {pokemon?.types && (
        <Box rounded={'lg'} bg={backgroundPokemon(pokemon)}>
          <Box>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <Image
                src={pokemon?.sprites?.other['official-artwork'].front_default}
              />
            </motion.div>
          </Box>
          <Box>
            <Heading fontSize={'3xl'} fontWeight={500}>
              {'ID #' + pokemon.id}
            </Heading>
            <Heading fontSize={'3xl'} fontWeight={500}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Heading>
          </Box>
          <Box>
            {pokemon.types?.map(pokemon => (
              <Badge
                m={3}
                bg={'none'}
                color={'white'}
                key={pokemon.type.name}
                value={pokemon.type.name}
              >
                <Heading>{pokemon.type.name}</Heading>
              </Badge>
            ))}
            <NavLink to={''}>
              <IconButton
                icon={<SearchIcon />}
                variant={'solid'}
                colorScheme={'whiteAlpha'}
                onClick={onOpen}
              />
              <ModalPokemon
                isOpen={isOpen}
                onClose={onClose}
                pokemon={pokemon}
              />
            </NavLink>
          </Box>
          <Box>
            <Heading>Stats</Heading>
            {pokemon?.stats?.map(stat => (
              <Badge
                m={5}
                fontSize="1.1em"
                rounded={'lg'}
                key={stat.stat.name}
                display={'flex'}
              >
                <Text>{stat.stat.name + ' ' + stat.base_stat}</Text>
              </Badge>
            ))}
          </Box>
          <Box mb={4}>
            <NavLink to={'/pokedex'}>
              <IconButton
                icon={<ArrowLeftIcon />}
                variant={'solid'}
                colorScheme={'whiteAlpha'}
              />
            </NavLink>
          </Box>
        </Box>
      )}
    </Box>
  );
}
