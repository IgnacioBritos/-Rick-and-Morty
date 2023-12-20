// import { Form } from "react-router-dom";
import axios from "axios";
import { ADD_FAV , REMOVE_FAV, FILTER, ORDER } from "./action-type";

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
         const {data}= await axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });   
      } catch (error) {
         console.error('Error al agregar favorito:', error); 
      }
    };
 };

 export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async(dispatch)=>{
      try {
         const {data}= await  axios.delete(endpoint)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
         console.error('Error al eliminar favorito:', error); 
      }
    }
}

export const filterCards = (gener)=>{
    return {type: FILTER, payload: gener}
}
export const orderCard=(order)=>{
    return{type:ORDER,payload:order};
}