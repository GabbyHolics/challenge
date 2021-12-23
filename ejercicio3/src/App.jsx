import "./App.css";
import { NavBar } from "./components/NavBar";
import { useState, useEffect } from "react";
import {Card} from "./components/Card";
import {Search} from "./components/Search"
import axios from 'axios'

function App() {
  const [characters, setCharacters] = useState([]);
  const [charactersStatic, setCharactersStatic] = useState([]);
  const [search, setSearch] = useState('');
  const get = async() => {
    await axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=75c04477ca6760655c6063652cf666dd&hash=4cf1616e5dc9bbee9f5e596f0d7e3fd0')
    .then(response => {
      setCharacters(response.data.data.results)
      setCharactersStatic(response.data.data.results)
    }
    ).catch(err =>{
      console.log(err)
    })
  }

  useEffect(()=>{
    get()
  }, []);

  console.log(characters)
  return (
    <>
      <div className="container-fluid bg-primary ">
        <header>
          <NavBar />
        </header>
        <main>
          <Search
          characters={characters}
            search={search}
            setSearch={setSearch}
            setCharacters={setCharacters}
            charactersStatic={charactersStatic}
          />
          <section>
          <Card
          characters={characters}
          />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
