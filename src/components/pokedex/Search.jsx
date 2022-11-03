import { Box, Input, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';

export function Search({ onSearch }) {
  const [search, setSearch] = useState('');

  const onChange = e => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async e => {
    onSearch(search);
  };

  return (
    <Flex>
      <Box>
        <Input placeholder="Busca un pokemon" onChange={onChange} />
      </Box>
      <Box ml={3}>
        <Button onClick={onClick} colorScheme="gray">
          Buscar
        </Button>
      </Box>
    </Flex>
  );
}
