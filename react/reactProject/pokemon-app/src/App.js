import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { getAllPokemon } from './util/pokemon';
import { getPokemon } from './util/pokemon';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';


function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [previousURL, setPreviousURL] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      //すべてのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      //各ポケモンの詳細なデータを取得
      // console.log(res);
      loadPokemon(res.results);
      setNextURL(res.next);
      setPreviousURL(res.previous);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        // console.log(pokemon);
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    )
    setPokemonData(_pokemonData);
  };

  // console.log(pokemonData);

  const handlePrevPage = async() => {
    if(!previousURL) return;
    setLoading(true);
    let data = await getAllPokemon(previousURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPreviousURL(data.previous);
    setLoading(false);
  };
  const handleNextPage = async() => {
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPreviousURL(data.previous);
    setLoading(false);
  }

  return (
    <>
    <Navbar />
      <div className="App">
        {loading ? (
          //ローディング中である時の表示
          <h1>ロード中・・・</h1>
        ) : (
          <>
            <div className='pokemonCardContainer'>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
            <div className='btn'>
              <button onClick={handlePrevPage}>前</button>
              <button onClick={handleNextPage}>次</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
