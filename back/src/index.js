const { conn } = require('./DB/DB_connection');
const { server } =  require("./app")
const PORT = 3001;

server.listen(PORT, () => {
   conn.sync({force:true})
   console.log('Server raised in port: ' + PORT);
});




