var mongoose = require('mongoose'),
    requiredMessage = '{PATH} is required';

module.exports.init = function () {
    var commentSchema = mongoose.Schema({
        author: { type: String, required: requiredMessage },
        content: { type: String, required: requiredMessage },
        date: { type: Date, required: requiredMessage, default: new Date()}
    });

    var playlistSchema = mongoose.Schema({
        title: {type: String, required: requiredMessage},
        description: {type: String, required: requiredMessage},
        videos: {type: [String]},
        category: {type: String, required: requiredMessage},
        creator: {type: String, required: requiredMessage},
        creationDate: {type: Date, required: requiredMessage, default: new Date()},
        isPrivate: {type: Boolean, required: requiredMessage},
        ratings: {type: [Number], min: 0, default: 0},
        visibleToUsers: {type: [String]},
        comments:{type: [commentSchema]}
    });

    var Playlist = mongoose.model('Playlist', playlistSchema),
        Comment = mongoose.model('Comment', commentSchema);

    Playlist.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Can not find playlists:' + err);
            return;
        }

        if (collection.length === 0) {
            Playlist.create({
                title: 'Test 1',
                description: 'Description',
                videos: ['https://www.youtube.com/watch?v=Da4DL5-9JOI'],
                category: 'Rock',
                creator: 'Pesho',
                creationDate: new Date(),
                isPrivate: false,
                ratings: [1]
            },{
                title: 'Test 2',
                description: 'Description',
                videos: ['https://www.youtube.com/watch?v=Da4DL5-9JOI'],
                category: 'Rock',
                creator: 'Ivan',
                creationDate: new Date(),
                isPrivate: false,
                ratings: [1]
            },{
                title: 'Test 3',
                description: 'Description',
                videos: ['https://www.youtube.com/watch?v=Da4DL5-9JOI'],
                category: 'Rock',
                creator: 'Gosho',
                creationDate: new Date(),
                isPrivate: false,
                rating: [1]
            },{
                title: 'Test 4',
                description: 'Description',
                videos: ['https://www.youtube.com/watch?v=Da4DL5-9JOI'],
                category: 'Rock',
                creator: 'Stamat',
                creationDate: new Date(),
                isPrivate: false,
                rating: [1]
            });
        }
    });
};
