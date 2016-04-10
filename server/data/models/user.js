var mongoose = require('mongoose'),
    encryption = require('../../utilities/encryption'),
    defaultImage = 'https://ninjageisha.files.wordpress.com/2012/08/ninja-tadaa.jpg',
    requiredMessage = '{PATH} is required';

module.exports.init = function () {
    var userSchema = mongoose.Schema({
        username: {
            type: String,
            require: requiredMessage,
            unique: true,
            minlength: 6,
            maxLength: 20
        },
        salt: String,
        hashPass: String,
        firstName:{ type: String,  require: requiredMessage },
        lastName:{ type: String,  require: requiredMessage },
        email:{ type: String,  require: requiredMessage },
        image: { type: String, default: defaultImage },
        faceBookLink: String,
        youTubeLink: String,
        rating: Number
    });

    userSchema.method({
        authenticate: function(password) {
            if (encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
                return true;
            }
            else {
                return false;
            }
        }
    });

    var User = mongoose.model('User', userSchema);
};