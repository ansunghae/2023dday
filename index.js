const express = require('express');
const app = express();
const router = require('./router/main') (app);
const port = 80;

app.use('/', express.static("./public"));

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(port, () => {
    console.log(`Server Open`);
    console.log(`Port : ${port}`);
});