//     Controles
const {login} =require('../controllers/login');
const { getCharById } = require('../controllers/getCharById')
const {postFav,deleteFav}= require('../controllers/handleFavorite');

const experss= require('express')
const router = experss.Router();


router.get('/character/:id',getCharById);

router.get('/login',login);

router.post('/fav',postFav);

router.delete('/fav/:id',deleteFav);

module.exports={
    router,
};

