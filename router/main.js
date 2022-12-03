module.exports = function(app) {
    app.get('/', (req, res) => {
        res.render('home.html');
    });

    app.get('/home', (req, res) => {
        res.render('home.html');
    });

    app.get('/wish', (req, res) => {
        res.render('wish.html');
    });
};