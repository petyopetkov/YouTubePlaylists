var playlists = require('../data/playlists'),
    constants = require('../common/constants'),
    CONTROLLER_NAME = 'playlists',
    PAGE = 1,
    PAGE_SIZE = 8;

module.exports = {
    getTopPublic: function (req, res) {
        playlists.getTopPublic(PAGE, PAGE_SIZE, function (err, data) {
            res.render('index', {data: data});
        })
    },
    getAll: function (req, res) {
        var page = req.query.page,
            pageSize = req.query.pageSize,
            user = req.user;
        playlists.all(page, pageSize, user, function (err, data) {
            res.render(CONTROLLER_NAME + '/all', {data: data});
        });
    },
    getCreate: function (req, res) {

    },
    postCreate: function (req, res) {

    }
};