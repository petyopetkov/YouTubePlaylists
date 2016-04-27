var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/register', controllers.users.getRegister);
    app.post('/register', controllers.users.postRegister);

    app.post('/login', auth.login);
    app.get('/login', controllers.users.getLogin);

    app.get('/logout', auth.logout);

    app.get('/profile', auth.isAuthenticated, controllers.users.getProfile);
    app.post('/profile', auth.isAuthenticated, controllers.users.postProfile);

    app.get('/', controllers.playlists.getTopPublic);

    app.get('/playlists', controllers.playlists.getAll);

    app.get('*', function(req, res) {
        res.render('error', {currentUser: req.user});
    });
};
