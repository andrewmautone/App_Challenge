const express = require('express')
const app = express()
const port = 3003
const bodyParser = require('body-parser');
const cors = require('cors');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ConnectionTypesController = require('./controllers/ConnectionTypesController');
const authMiddleware = require("./middleware/auth")

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
//Connection Type routes

app.get('/connectionTypes',ConnectionTypesController.index);

// User Routes
app.get('/users/:username',UserController.index);
app.get('/users',authMiddleware,UserController.auth);
app.put('/users/:id',authMiddleware,UserController.update);
app.post('/users',UserController.store);

//Session Route
app.post('/session',SessionController.login);



app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})