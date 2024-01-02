//The Model of the notes object
/**
 * @swagger
 * components:
 *   schemas:
 *     Note:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: The auto-generated mongodb id of the note
 *         title:
 *           type: string
 *           description: The title of the note
 *         content:
 *           type: string
 *           description: The content of the note
 *         createdAt:
 *           type: date
 *           format: date
 *           description: The date the note was added
 *         updatedAt:
 *           type: date
 *           format: date
 *           description: The date the note was last modified
 *       example:
 *         _id: 6593ce294cd3eb2f655e1add
 *         title: Documented note
 *         content: Content for documented note
 *         createdAt: 2024-01-02T08:49:45.171Z
 *         updatedAt: 2024-01-02T08:49:45.171Z
 */

const express = require("express");
const router = express.Router();
const {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
} = require("../controllers/note");

router.post("/note", createNote);

router.get("/note", getAllNotes);

router.get("/note/:noteId", getSingleNote);

router.put("/note/:noteId", updateNote);

router.delete("/note/:noteId", deleteNote);

//swagger documentation for all the routes

/**
 * @swagger
 * tags:
 *   name: NoteTaker
 *   description: API consisting of CRUD operations
 * /api/note:
 *   get:
 *     summary: Lists all the notes
 *     tags: [NoteTaker]
 *     responses:
 *       201:
 *         description: Fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'
 *       500:
 *         description: Internal server error
 *   post:
 *     summary: Create a new note
 *     tags: [NoteTaker]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       500:
 *         description: Internal server error
 * /api/note/{id}:
 *   get:
 *     summary: Get the note by id
 *     tags: [NoteTaker]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The note id
 *     responses:
 *       201:
 *         description: Fetched successfully
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       400:
 *         description: Note doesn't exists in the system
 *       500:
 *         description: Internal server error
 *   put:
 *    summary: Update the note by the id
 *    tags: [NoteTaker]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The note id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *    responses:
 *      201:
 *        description: Updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Note'
 *      400:
 *        description: Note doesn't exists in the system
 *      500:
 *        description: Internal server error
 *   delete:
 *     summary: Remove the note by id
 *     tags: [NoteTaker]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The note id
 *
 *     responses:
 *       201:
 *         description: Deleted successfully
 *       400:
 *         description: Note doesn't exists in the system
 *       500:
 *         description: Internal server error
 */

module.exports = router;
