import Card from '../Card/Card';
import styles from './Cards.module.css'
const Cards = ({ characters, onClose }) => {
   return(
      <div className={styles.container_cards}>
         {characters.map(({ id, name, image }) => {
            return <Card
               key={id}
               id={id}
               name={name}
               image={image}
               onClose={onClose}
            />
         })}
      </div>
   )
}

export default Cards;
