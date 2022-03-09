const { Schema, model } = require('mongoose');



const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: 'Username is required',
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: 'An email is required',
    //   match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});


// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;