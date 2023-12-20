let myFavorite=[];

const postFav =(req,res)=>{
    const character =req.body;
    const characterRepeated=myFavorite.find((fav)=>{
        return fav.id===character.id
    })
    if(!characterRepeated){
        myFavorite.push(character);
    }
    return res.status(200).json(myFavorite);
}
 
const deleteFav=(req,res)=>{
    const{id}=req.params;
    myFavorite = myFavorite.filter((fav)=>{
        return fav.id != id;
    })

    return res.status(200).json(myFavorite);
}

module.exports={
    postFav,
    deleteFav
}