import './App.css';
import Cards from './components/cards/Cards.jsx';
import { useState } from 'react';
import Nav from "./components/nav/Nav"
import axios from "axios"



function App() {
   const [characters, setCharacters] = useState([])

   const onClose = id => {
      setCharacters(characters.filter(caracter =>
         caracter.id !== Number(id)))
   }
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
      return (
      <div className='App'>
         <Cards onClose={onClose} characters={characters} />
         <Nav onSearch={onSearch}/>
      </div>
   );
   }

export default App;