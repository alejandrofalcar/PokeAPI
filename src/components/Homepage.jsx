import { Flex, Box, Text, Image } from "@chakra-ui/react";

export function Homepage() {
  return (
    <Box alignItems={"center"} justifyContent={"center"}>
      <Box>
        <Image
          src={
            "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/others_3/SI_Pokemon.jpg"
          }
        />
      </Box>
      <Flex justifyContent={"center"} p={5} gap={5}>
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          width={{base: 100, lg: 700}}
          bg={"yellow.300"}
          rounded={"xl"}
          p={5}
        >
          <Text>
            Bienvenidos a la Pokedex de The Pokémon Company International.
            Gracias a esta aplicación encontrarás todo lo necesario para
            convertirte en el mejor entrenador del mundo en Pokémon.
          </Text>
        </Box>
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          width={{base: 100, lg: 700}}
          bg={"yellow.300"}
          rounded={"xl"}
          p={5}
        >
          <Text>
            Para comenzar tu aventura, solo tienes que darle clic en el menú superior a la pestaña de la Pokedex, allí aparecerán todas las tarjetas de todos los Pokemon que existen.
          </Text>
        </Box>
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          width={{base: 100, lg: 700}}
          bg={"yellow.300"}
          rounded={"xl"}
          p={5}
        >
          <Text>
            ¡Nuestro último videojuego, Pokémon: Escarlata y Púrpura ya está en el mercado! ¿Lo has jugado ya?
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
