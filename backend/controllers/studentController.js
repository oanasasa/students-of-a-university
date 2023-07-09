const asyncHandler = require("express-async-handler");
// import main from "../../prismaClient";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// @desc    Get Students
// @route   GET /api/students
// @access  Private

const getStudents = asyncHandler(async (req, res) => {
  const student = await prisma.student();

  res.status(200).json(student);
});

// @desc    Set Students
// @route   POST /api/students
// @access  Private

const setStudents = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text filed");
  }
  res.status(200).json({ message: "Set Students" });
});

// @desc    Update Students
// @route   PUT /api/students/:id
// @access  Private

const updateStudents = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Student ${req.params.id}` });
});

// @desc    Delete Students
// @route   DELETE /api/students
// @access  Private

const deleteStudents = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Student ${req.params.id}` });
});

module.exports = {
  getStudents,
  setStudents,
  updateStudents,
  deleteStudents,
};
