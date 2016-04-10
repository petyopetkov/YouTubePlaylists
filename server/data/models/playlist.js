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
        isPublic: {type: Boolean, required: requiredMessage},
        ratings: {type: [Number], min: 0, default: 0},
        visibleToUsers: {type: [String]},
        comments:{type: [commentSchema]}
    });

    var Playlist = mongoose.model('Playlist', playlistSchema),
        Comment = mongoose.model('Comment', commentSchema);
};
