import "./App.css";
import { NavBar } from "./components/NavBar";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import axios from 'axios'
import { Search } from "./components/Search";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=75c04477ca6760655c6063652cf666dd&hash=4cf1616e5dc9bbee9f5e596f0d7e3fd0')
    .then(response => (setCharacters(response.data.data.results)))
  
  }, []);
  console.log(characters)
  return (
    <>
      <div className="container-fluid bg-primary ">
        <header>
          <NavBar />
        </header>
        <main>
          <section>
            <Search
             characters={characters}
            />
          </section>
          <Card 
          characters={characters} 

          />
        </main>
      </div>
    </>
  );
}

export default App;
