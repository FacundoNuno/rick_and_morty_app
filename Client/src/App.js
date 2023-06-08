import './App.css';
import Cards from './components/cards/Cards.jsx';
import { useState, useEffect } from 'react';
import NavBar from "./components/nav/NavBar";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from "./components/about/About";
import Detail from "./components/detail/Detail"
import Forms from './components/form/Forms.jsx';

// import Favorites from "./components/favorites/Favorites"

function App() {
   const [characters, setCharacters] = useState([])

   const {pathname} = useLocation();
   
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   // const EMAIL = 'ejemplo@gmail.com';
   // const PASSWORD = 'unaPassword';
   
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   // useEffect(() => {
   //    !access && navigate('/');
   //    }, [access, navigate]);
   
   
   
   
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
   // const onSearch =id=> {
      // //Evitar duplicados:
      // const characterId = characters.filter (character =>
      // character.id === Number(id));
      // //console.log(characterId);
      // if(characterId.length) return alert (" The character already exists!");
      // if(id <1 || id> 826 ) return alert("There is no character with the entered id!");
      
      // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      // if (data.name) {
      // setCharacters((oldChars) => [...oldChars, data]);
      // } else {
      // window.alert('¡No hay personajes con este ID!');
      // }
      // });
      // }
   
   const onClose = id => {
      setCharacters(characters.filter(caracter =>
         caracter.id !== Number(id)))
   }

   function generarRandomId () {
      const randomId = Math.floor(Math.random() * 826) + 1;
      onSearch(randomId)
   } 
      return (
         
         
         <div className='App'>
         <NavBar onSearch={onSearch} randomCharacter={generarRandomId} />
         <Routes>
            <Route exact path='/' element={<Forms login={login} />} />
            <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}/>
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            {/* <Route path="/favorites" element={<Favorites />} /> */}
         </Routes>
         
      </div>
   );
   }

export default App;