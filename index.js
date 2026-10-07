const express = require('express');  
const app = express();
const port = 5000; 
const router = require('./routes/router')

app.use(express.static('public'))
app.set('view engine','pug');

app.use('/', router);


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`); 
});


