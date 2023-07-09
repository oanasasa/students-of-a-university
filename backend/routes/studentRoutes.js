const express = require("express");
const router = express.Router();
const {
  getStudents,
  setStudents,
  updateStudents,
  deleteStudents,
} = require("../controllers/studentController");

router.route("/").get(getStudents).post(setStudents);
router.route("/:id").put(updateStudents).delete(deleteStudents);

module.exports = router;
