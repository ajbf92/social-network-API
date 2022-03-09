const router = require('express').Router();

const {
    addFriend,
    removeFriend
  } = require('../../controllers/friend-controller');

// Set up PUT at /api/friends/<userId>
router
  .route('/:userId')
  .put(addFriend);

// Set up DELETE at /api/friends/<userId>/<_id>
router
  .route('/:userId/:_id')
  .put(removeFriend);

module.exports = router;