import './App.css';
import Cards from './components/cards/Cards.jsx';
import { Component, useState } from 'react';
import NavBar from "./components/nav/NavBar";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail"

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
         <NavBar onSearch={onSearch} randomCharacter={generarRandomId} />
         <Routes>
            <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
         
      </div>
   );
   }

export default App;