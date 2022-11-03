import Pokedex from './components/pokedex/Pokedex';
import { Route, Routes } from 'react-router-dom';
import { Pokemon } from './components/pokemon/Pokemon';
import Navbar from './components/Navbar';
import { Homepage } from './components/Homepage';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:name" element={<Pokemon />} />
      </Routes>
    </>
  );
}
