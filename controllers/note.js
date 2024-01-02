const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utilities/errorHandler");
const NoteModel = require("../models/note");

const createNote = catchAsyncError(async (req, res, next) => {
  const { title, content } = req.body;

  const note = await NoteModel.create({ title, content });

  return res.status(201).json({
    success: true,
    message: "Created successfully",
    data: note,
  });
});

const getAllNotes = catchAsyncError(async (req, res, next) => {
  const notes = await NoteModel.find();
  return res.status(201).json({
    success: true,
    message: "Fetched successfully",
    data: notes,
  });
});

const getSingleNote = catchAsyncError(async (req, res, next) => {
  const { noteId } = req.params;

  if (!noteId) return next(new ErrorHandler("noteId not given", 400));

  const note = await NoteModel.findOne({ _id: noteId });

  if (!note)
    return next(new ErrorHandler("Note doesn't exists in the system", 400));

  return res.status(201).json({
    success: true,
    message: "Fetched successfully",
    data: note,
  });
});

const updateNote = catchAsyncError(async (req, res, next) => {
  const { title, content } = req.body;
  const { noteId } = req.params;

  if (!noteId || !title || !content)
    return next(new ErrorHandler("Parameters missing in the request", 400));

  const isNote = await NoteModel.findById(noteId);

  if (!isNote)
    return next(new ErrorHandler("Note doesn't exist in the system", 400));

  const note = await NoteModel.findByIdAndUpdate(
    {
      _id: isNote._id,
    },
    {
      title,
      content,
    },
    { new: true }
  );
  return res.status(201).json({
    success: true,
    message: "Updated successfully",
    data: note,
  });
});

const deleteNote = catchAsyncError(async (req, res, next) => {
  const { noteId } = req.params;

  if (!noteId) return next(new ErrorHandler("Note Id note given", 400));

  const isNote = await NoteModel.findById(noteId);

  if (!isNote)
    return next(new ErrorHandler("Note doesn't exist in the system", 400));

  const note = await NoteModel.findByIdAndDelete({
    _id: noteId,
  });
  return res.status(201).json({
    success: true,
    message: "Deleted successfully",
    data: note,
  });
});

module.exports = {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
};
