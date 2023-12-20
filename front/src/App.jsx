/* style */
import './App.css';

/* components to render */
import Nav from './components/nav/Nav';
import Form from './components/form/Form';
import Cards from './components/cards/Cards';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Favorite from './components/favorite/Favorite';

/* hooks */
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

/* dependencies */
import axios from "axios";

function App() {

  const [characters,setCharacters]= useState([]);
  const local = useLocation();
  const pathname =local.pathname;
  const [access,setAccess]=useState(false);
  const navigate= useNavigate()


  
  async function onSearch(id){
    try {
        const {data}= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
        if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
    }catch (error) {
      window.alert('¡No hay personajes con este ID!');
    }
  }


  function onClose(id){
    const characterFilter= characters.filter((character)=>{
       return character.id !== id;
      })
     setCharacters(characterFilter);
  }

  async function login(userData){
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const{data}=await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    } catch (error) {
      window.alert('Usuario NO registrado!');
    }
  }

   useEffect(()=>{
    switch(pathname){
      case '/':
        document.body.classList.add('container-from-back')
        break
      default:
        document.body.classList.add('container-home-back')
      }
      return 
  },[pathname])
 
  useEffect(() => {
        !access && navigate('/');
  }, [access]);
      
      return(
        <div>
        { pathname !== '/' && <Nav onSearch={onSearch}/> }
      <Routes>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/' element={<Form login={login} />}/>
      </Routes>

      </div>
    
  )
}

export default App
