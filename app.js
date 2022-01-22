const express = require('express');
const app = express();
require('dotenv').config({path: 'variables.env' })
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Servidor encendido on port: ${PORT}`);
});

app.get('/', (req, res)=>{
    res.send('Servidor Activo')
})