import { useState, useEffect } from 'react';
import {
  getPokemons,
  getPokemonsData,
  searchPokemon,
} from '../../services/Api';
import {
  Image,
  Box,
  Heading,
  IconButton,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { backgroundPokedex } from '../styles';
import { InfoIcon } from '@chakra-ui/icons';
import { Pagination } from './Pagination';
import { Search } from './Search';

export function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const onSearch = async pokemon => {
    if (!pokemon) {
      return fetchPokemons();
    }
    const result = await searchPokemon(pokemon);
    if (!result) {
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
  };

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(30, 30 * page);
      const promises = data.results.map(async pokemon => {
        return await getPokemonsData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setTotalPages(Math.ceil(data.count / 30));
    } catch (error) {
      console.log(error);
    }
  };

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, totalPages - 1);
    setPage(nextPage);
  };

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line
  }, [page]);

  return (
    <Box>
      <Flex justifyContent={'flex-end'} alignItems={'center'}>
        <Box>
          <Search onSearch={onSearch} />
        </Box>
        <Box>
          <Pagination
            page={page + 1}
            setPage={setPage}
            onLeftClick={lastPage}
            onRightClick={nextPage}
            totalPages={totalPages}
          />
        </Box>
      </Flex>
      <SimpleGrid minChildWidth={250} spacingX={8} spacingY={6} p={3}>
        {pokemons.map(pokemon => (
          <Box
            bg={backgroundPokedex(pokemon)}
            rounded={'lg'}
            maxW={300}
            key={pokemon.name}
          >
            <Box>
              <Heading fontSize={'4xl'} color={'white'} align={'center'} pt={3}>
                {'#' + pokemon.id}
              </Heading>
            </Box>
            <Box>
              <motion.div whileHover={{ scale: 1.06 }} key={pokemon.name}>
                <Image
                  src={pokemon.sprites.other['official-artwork'].front_default}
                />
              </motion.div>
            </Box>
            <Box align={'center'}>
              <Box align={'center'}>
                <Heading fontSize={'2xl'} fontWeight={500} color={'white'}>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Heading>
              </Box>
              <Box align={'center'} p={3}>
                <Link to={`${pokemon.name}`}>
                  <IconButton
                    icon={<InfoIcon />}
                    variant={'solid'}
                    colorScheme={'whiteAlpha'}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Pokedex;
