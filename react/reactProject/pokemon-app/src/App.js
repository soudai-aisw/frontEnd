import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { getAllPokemon } from './util/pokemon';
import { getPokemon } from './util/pokemon';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading ,setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect( () => {
    const fetchPokemonData = async () => {
      //すべてのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      //各ポケモンの詳細なデータを取得
      // console.log(res);
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  },[]);
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

  console.log(pokemonData);

  return (
    <div className="App">
      {loading ?(
        //ローディング中である時の表示
        <h1>ロード中・・・</h1>
      ):(
        <>
          <h1>ポケモンデータを取得しました</h1>
        </>
      )}
    </div>
  );
}

export default App;
