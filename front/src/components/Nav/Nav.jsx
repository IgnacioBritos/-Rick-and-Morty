import  SearchBar from '../SearchBar'
import { Link , useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav({onSearch}) {
    const location = useLocation()
    if (location.pathname!=='/') {
        
    return(
    <nav className={styles.nav}>
         <Link 
         className={styles.button}
         to='/favorite'> 
            <button> Favorite </button>
         </Link>

        <Link
         className={styles.button}
         to="/about"> 
        <button> About</button>
         </Link>
         <Link 
         className={styles.button}
         to='/home'> 
            <button> home </button>
         </Link>

        <SearchBar
        onSearch={onSearch} />
    </nav>)
    }
    else return
}