const express = require('express');
const app = express();



//Settings(Configuraciones)
app.set('port',process.env.PORT || 3000);

//Middlewares
/* Permite que nuestro servidor procese informacion en formato JSON */
app.use(express.json());


//Routes

app.use('/api',require('./routes/lugaresRoutes'));

//Starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});