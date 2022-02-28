const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id. Have to import Types above to use this
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: "Please input your thought or thoughts",
      maxlength: [280, 'Can not exceed 280 characters']
    },
    writtenByUsername: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
);

const ThoughtSchema = new Schema({
  writtenByUsername: {
    type: String,
    required: true
  },
  thoughtText: {
    type: String,
    required: "Please input your thought or thoughts",
    minlength: [1, 'Character length must be between 1-280'],
    maxlength: [280, 'Can not exceed 280 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  },
  // use ReplySchema to validate data for a reply
  reactions: [ReactionSchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;