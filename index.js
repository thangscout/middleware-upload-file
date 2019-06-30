const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));

const USER_ROUTER = require('./routers/user.router');

app.get('/', (req, res)=>{
    res.json({message: 'Welcome to my project'});
});

app.use('/user', USER_ROUTER);

app.listen(port, ()=> console.log(`Server started at port ${port}`));