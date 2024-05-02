const express = require("express");
const noteController = require("../controller/noteController")
const router = express.Router();

router.get("/", noteController.getNotes);
router.post("/", noteController.createNotes);
router.put("/:id", noteController.editNotes);      
router.delete("/:id/", noteController.deleteNotes);

module.exports = router;