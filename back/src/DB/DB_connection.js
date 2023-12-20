require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const UserModule =require('./models/User')
const FavoriteModule =require('./models/Favorite');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,{logging:false,native:false})
console.log(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`)
// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
UserModule(sequelize)
//
FavoriteModule(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: 'ActorMovies' });
Favorite.belongsToMany(User, { through: 'ActorMovies' });

module.exports = {
    User,
    Favorite,
     conn: sequelize,
 };
 
