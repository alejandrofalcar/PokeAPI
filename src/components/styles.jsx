export const backgroundPokedex = pokemon => {
  switch (pokemon.types[0].type.name) {
    case 'grass':
      return 'linear-gradient(180deg, rgba(34,195,40,1) 0%, rgba(20,124,24,1) 100%)';
    case 'fire':
      return 'linear-gradient(180deg, rgba(195,34,34,1) 0%, rgba(124,20,20,1) 100%)';
    case 'water':
      return 'linear-gradient(180deg, rgba(34,174,195,1) 0%, rgba(20,110,124,1) 100%)';
    case 'normal':
      return 'linear-gradient(180deg, rgba(186,186,186,1) 0%, rgba(144,144,144,1) 100%)';
    case 'electric':
      return 'linear-gradient(180deg, rgba(255,220,0,1) 0%, rgba(150,139,23,1) 100%)';
    case 'poison':
      return 'linear-gradient(180deg, rgba(188,37,212,1) 0%, rgba(137,23,150,1) 100%)';
    case 'bug':
      return 'linear-gradient(180deg, rgba(0,126,20,1) 0%, rgba(0,66,10,1) 100%)';
    case 'ground':
      return 'linear-gradient(180deg, rgba(176,53,31,1) 0%, rgba(115,37,18,1) 100%)';
    case 'fighting':
      return 'linear-gradient(180deg, rgba(200,99,24,1) 0%, rgba(116,59,17,1) 100%)';
    case 'rock':
      return 'linear-gradient(180deg, rgba(126,52,0,1) 0%, rgba(68,28,0,1) 100%)';
    case 'ghost':
      return 'linear-gradient(180deg, rgba(79,0,130,1) 0%, rgba(34,0,56,1) 100%)';
    case 'flying':
      return 'linear-gradient(180deg, rgba(186,186,186,1) 0%, rgba(80,84,84,1) 100%)';
    case 'steel':
      return 'linear-gradient(180deg, rgba(1,111,85,1) 0%, rgba(0,56,43,1) 100%)';
    case 'psychic':
      return 'linear-gradient(180deg, rgba(194,2,140,1) 0%, rgba(111,1,80,1) 100%)';
    case 'ice':
      return 'linear-gradient(180deg, rgba(5,145,139,1) 0%, rgba(3,89,85,1) 100%)';
    case 'dragon':
      return 'linear-gradient(180deg, rgba(66,166,135,1) 0%, rgba(3,89,85,1) 100%)';
    case 'dark':
      return 'linear-gradient(180deg, rgba(57,57,57,1) 0%, rgba(0,0,0,1) 100%)';
    case 'fairy':
      return 'linear-gradient(180deg, rgba(171,0,177,1) 0%, rgba(99,0,102,1) 100%)';
    case 'shadow':
      return;
    default:
      return '#FFFFFFF';
  }
};

export const backgroundPokemon = pokemon => {
  switch (pokemon.types[0].type.name) {
    case 'grass':
      return 'linear-gradient(180deg, rgba(34,195,40,1) 0%, rgba(20,124,24,1) 100%)';
    case 'fire':
      return 'linear-gradient(180deg, rgba(195,34,34,1) 0%, rgba(124,20,20,1) 100%)';
    case 'water':
      return 'linear-gradient(180deg, rgba(34,174,195,1) 0%, rgba(20,110,124,1) 100%)';
    case 'normal':
      return 'linear-gradient(180deg, rgba(186,186,186,1) 0%, rgba(144,144,144,1) 100%)';
    case 'electric':
      return 'linear-gradient(180deg, rgba(255,220,0,1) 0%, rgba(150,139,23,1) 100%)';
    case 'poison':
      return 'linear-gradient(180deg, rgba(188,37,212,1) 0%, rgba(137,23,150,1) 100%)';
    case 'bug':
      return 'linear-gradient(180deg, rgba(0,126,20,1) 0%, rgba(0,66,10,1) 100%)';
    case 'ground':
      return 'linear-gradient(180deg, rgba(176,53,31,1) 0%, rgba(115,37,18,1) 100%)';
    case 'fighting':
      return 'linear-gradient(180deg, rgba(200,99,24,1) 0%, rgba(116,59,17,1) 100%)';
    case 'rock':
      return 'linear-gradient(180deg, rgba(126,52,0,1) 0%, rgba(68,28,0,1) 100%)';
    case 'ghost':
      return 'linear-gradient(180deg, rgba(79,0,130,1) 0%, rgba(34,0,56,1) 100%)';
    case 'flying':
      return 'linear-gradient(180deg, rgba(186,186,186,1) 0%, rgba(80,84,84,1) 100%)';
    case 'steel':
      return 'linear-gradient(180deg, rgba(1,111,85,1) 0%, rgba(0,56,43,1) 100%)';
    case 'psychic':
      return 'linear-gradient(180deg, rgba(194,2,140,1) 0%, rgba(111,1,80,1) 100%)';
    case 'ice':
      return 'linear-gradient(180deg, rgba(5,145,139,1) 0%, rgba(3,89,85,1) 100%)';
    case 'dragon':
      return 'linear-gradient(180deg, rgba(66,166,135,1) 0%, rgba(3,89,85,1) 100%)';
    case 'dark':
      return 'linear-gradient(180deg, rgba(57,57,57,1) 0%, rgba(0,0,0,1) 100%)';
    case 'fairy':
      return 'linear-gradient(180deg, rgba(171,0,177,1) 0%, rgba(99,0,102,1) 100%)';
    case 'shadow':
      return;
    default:
      return '#FFFFFFF';
  }
};
