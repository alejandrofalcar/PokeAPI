import { Box, Flex, Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

export function Pagination({ onLeftClick, onRightClick, page, totalPages }) {
  return (
    <Flex m={3} alignItems={'center'}>
      <Box>
        <Button colorScheme="gray" size="sm" onClick={onLeftClick} mr={2}>
          <ArrowBackIcon />
        </Button>
      </Box>
      <Box>
        {page} de {totalPages}
      </Box>
      <Box>
        <Button colorScheme="gray" size="sm" onClick={onRightClick} ml={2}>
          <ArrowForwardIcon />
        </Button>
      </Box>
    </Flex>
  );
}
