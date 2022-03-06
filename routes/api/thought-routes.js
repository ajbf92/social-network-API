const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThoughts,
    removeThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

// Set up GET at /api/thoughts/
router
  .route('/')
  .get(getAllThoughts);

// set up get at /api/thoughts/<thoughtId>
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThoughts);

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