import './App.css';
import Cards from './components/cards/Cards.jsx';
import { useState } from 'react';
import Nav from "./components/nav/NavBar"
import axios from "axios"
import { Routes, Route } from "react-router-dom";



function App() {
   const [characters, setCharacters] = useState([])

   const onClose = id => {
      setCharacters(characters.filter(caracter =>
         caracter.id !== Number(id)))
   }
   
   function generarRandomId () {
      const randomId = Math.floor(Math.random() * 826) + 1;
      onSearch(randomId)
   } 

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const isDuplicate = characters.some((char) => char.id === data.id);
               if (isDuplicate) {
                  window.alert('¡Este personaje ya está en pantalla!');
               } else
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
      return (
      <div className='App'>
         <Nav onSearch={onSearch} randomCharacter={generarRandomId} />
         <Cards onClose={onClose} characters={characters} />
      </div>
   );
   }

export default App;