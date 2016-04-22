var Comment = require('mongoose').model('Comment');

module.exports = {
    createComment: function(comment, callback) {
        Comment.create(comment, callback);
    }
};