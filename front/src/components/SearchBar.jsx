import { useState } from "react"
import styles from './Nav/Nav.module.css'

export default function SearchBar({onSearch}) {
    const [id,setId] = useState('')
    const handleChange = (event)=>{
      setId(event.target.value)
    }
   return (   
      <div className={styles.searchBar} >
         <input 
         className={styles.input}
          value={id}
          type='search'
          onChange={handleChange}
          />
         <button 
         className={styles.search}
         onClick={()=>onSearch(id)}>Search</button> 
      </div>
   );
}
