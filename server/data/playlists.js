var Playlist = require('mongoose').model('Playlist');

module.exports = {
    getTopPublic: function (page, pageSize, callback) {
        page = page || 1;
        pageSize = pageSize || 8;

        Playlist.find({isPrivate: false})
            .sort({
                ratings: 'desc'
            })
            .limit(pageSize)
            .skip((page - 1) * pageSize)
            .exec(function (err, foundPlaylists) {
                if (err) {
                    callback(err);
                    return;
                }

                var data = {
                    playlists: foundPlaylists,
                    currentPage: page,
                    pageSize: pageSize
                };

                callback(err, data);
            })
    },
    create: function (playlist, callback) {
        Playlist.create(playlist, callback);
    },
    all: function (page, pageSize, user, callback) {
        page = page || 1;
        pageSize = pageSize || 10;

        if (user) {
            Playlist.find({})
            .sort({
                creationDate: 'desc'
            })
            .limit(pageSize)
            .skip((page - 1) * pageSize)
            .exec(function (err, foundPlaylists) {
                if (err) {
                    callback(err);
                    return;
                }

                Playlist.count().exec(function (err, numberOfPlaylists) {
                    var data = {
                        playlists: foundPlaylists,
                        currentPage: page,
                        pageSize: pageSize,
                        total: numberOfPlaylists
                    };
                    callback(err, data);
                });
            });
        } else {
            Playlist.find({isPrivate: false})
                .sort({
                    creationDate: 'desc'
                })
                .limit(pageSize)
                .skip((page - 1) * pageSize)
                .exec(function (err, foundPlaylists) {
                    if (err) {
                        callback(err);
                        return;
                    }

                    Playlist.count().exec(function (err, numberOfPlaylists) {
                        var data = {
                            playlists: foundPlaylists,
                            currentPage: page,
                            pageSize: pageSize,
                            total: numberOfPlaylists
                        };

                        callback(err, data);
                    });
                });
        }
    }
};
