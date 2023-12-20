import {ADD_FAV, REMOVE_FAV,FILTER,ORDER } from "./action-type"

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        // Crea un primer caso llamado "ADD_FAV" en 
        // el que puedas agregar a un personaje que recibes por payload 
        // a tu estado "myFavorites".
        case ADD_FAV:
         return { ...state, 
            myFavorites: action.payload, 
            allCharacters: action.payload 
        };


        // Crea otro caso llamado "REMOVE_FAV" en el que puedas 
        // eliminar a un personaje de tu estado "myFavorites" a partir de un
        //  id que recibas por payload.
        case REMOVE_FAV:
            return { ...state,
                 myFavorites: action.payload 
                };
        
        case FILTER:
            const filterByGener = [...state.allCharacters].filter(
                (fav)=>{
                return fav.gender == action.payload
                });
            return{
               ...state,
               myFavorites:filterByGener
            }
        case ORDER:
            const favOrdered = action.payload === 'A'
            ? [...state.allCharacters].sort((a,b)=> a.id - b.id)
            : [...state.allCharacters].sort((a,b)=> b.id - a.id)
            return{
                ...state,
                myFavorites: favOrdered            
            
            }

            
            default:
              return {
                ...state
              }
    }

}
export default reducer;