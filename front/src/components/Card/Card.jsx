import { Link , useLocation } from "react-router-dom";
import {addFav,removeFav} from '../../redux/action'
import {useSelector,useDispatch} from 'react-redux'
import { useState } from "react";
import { useEffect } from "react";
import style from './Card.module.css';


export default function Card ({id, name, image, onClose}){
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);
   const { pathname } = useLocation(); // '/favorites'
   const [isFav, setIsFav] = useState(false);


   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav({ id, name, image, onClose }));
         // dispatch(addFav({id: 23, name: 'Dai', image:'img.jpg', onClose: fn(){...}}))
      }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   },[myFavorites]);
   



   return (
      <div className={style.container}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         {
            pathname !== '/favorite'
             ? <button onClick={()=>{onClose(id)}} >X</button>
             : ''
            }
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <img
         className={style.img_card}
         src={image} 
         alt={name}
         /> 
      </div>
   );
}