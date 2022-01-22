const express = require('express');
const app = express();
/* require('dotenv').config({path: 'variables.env' }) */
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Servidor encendido on port: ${PORT}`);
});

