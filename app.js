const express = require('express');
const app = express();
let port = 4040;
const path = require('path');

/* Middleware */
app.use(express.static('public'));

/* Routing */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});

/* Server */
app.listen(port, () => {
    console.log(`Server funcionando en el puerto ${port}\n http://localhost:${port}`)
});