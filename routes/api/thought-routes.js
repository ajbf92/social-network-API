const router = require('express').Router();

const {
    addThought,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// Set up POST at /api/thoughts/<userId>
router
  .route('/:userId')
  .post(addThought);

// Set up DELETE at /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

router
  .route('/:userId/:thoughtId/:reactionId')
  .delete(removeReaction);

module.exports = router;