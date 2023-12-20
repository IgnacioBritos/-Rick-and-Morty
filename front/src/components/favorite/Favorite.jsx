import { useSelector, useDispatch } from "react-redux"
import Cards from "../cards/Cards";
import { filterCards,orderCard } from "../../redux/action"

const Favorite = ()=>{
    const dispatch= useDispatch()
    const {myFavorites} = useSelector((state)=> state)
    const handleOrder =(event)=>{
           dispatch(orderCard(event.target.value))
    }
    const handleFilter =(event)=>{
        dispatch(filterCards(event.target.value))
 }
    return(
        <div>

            <select onChange={handleOrder} >
                <option value="A">Ascendente</option>
                <option value="D">Descendete</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>

            </select>
            <Cards characters={myFavorites}/>
        </div>
    )
}

export default Favorite