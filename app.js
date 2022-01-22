const express = require('express');
const app = express();
/* require('dotenv').config({path: 'variables.env' }) */
const PORT = process.env.PORT || 3000
const path = require('path')

app.listen(PORT, ()=>{
    console.log(`Servidor encendido on port: ${PORT}`);
});

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) =>{
    res.send('Mi respuesta desde express')
})

app.get('/servicios', (req, res) =>{
    res.send('pagina de servicios')
})

