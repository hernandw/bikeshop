const express = require('express');
const app = express();
/* require('dotenv').config({path: 'variables.env' }) */
const PORT = process.env.PORT || 3000
const path = require('path')

app.listen(PORT, ()=>{
    console.log(`Servidor encendido on port: ${PORT}`);
});
//Motor de Plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));




app.get('/', (req, res) =>{
    res.render('index', {
        titulo: "Pagina Principal"
    })
})

app.get('/servicios', (req, res) =>{
    res.send('pagina de servicios')
})
app.use(express.static(__dirname + '/public'));

