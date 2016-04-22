var User = require('mongoose').model('User');

module.exports = {
    createUser: function(user, callback) {
        User.create(user, callback);
    },
    updateProfile: function(userId, userData, callback) {
        User.update(userId, userData, callback);
    }
};
