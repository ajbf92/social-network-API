const { User } = require("../models");
const {Types } = require('mongoose');

const friendController = {
    // add friend
    addFriend({ params, body }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { friends: body } },
          { new: true } 
        )
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            const lastFriend = dbUserData.friends.length-1;
            const friendsList = dbUserData.friends;
            User.findById(friendsList[lastFriend])
            .then(friendData => {
                res.json(friendData);
            })
            
            // res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },
    removeFriend({ params }, res) {
        User.findOneAndUpdate( 
          { _id: params.userId },
          { $pull: { friends: params._id } },
          { new: true }
        )
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
 
        }
}
module.exports = friendController;