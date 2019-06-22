import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: false
    },
    email: {
        type: String, 
        unique: true
    },
    password: {
        type: String, 
        unique: true
    }
});

userSchema.stattics.findByLogin = async function(login) {
    let user = await this.findOne({
        email: login,
    })

    if (!user) {
        user = await this.findOne({
            name: login
        });
    }

    return user;
};

//Remove foreign key records
userSchema.pre('remove', function(next) {
    this.model('Blog').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

export default User;