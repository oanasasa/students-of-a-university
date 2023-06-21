const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoals).delete(deleteGoal);

module.exports = router;
