const conn = require("../config/dbConfig");

const Note = require("../models/Note.js")

exports.getNotes = async(req, res) => {
    try{
        const notes  = await Note.findAll();
        console.log("Fetching notes.");
        res.status(200).json(notes);
    }
    catch (e) {
        console.log("Error fetching note: " + e);
        res.status(500).json({error:"Error fething notes, " + e});
    }
};

exports.createNotes = async(req, res) => {
    try {
        const {title, note_content} = req.body;
        const note = await Note.create({
            title,
            note_content
        });
        console.log(`Note created.`);
        res.status(201).json({
            note
        })
    } catch (error) {
        console.log("Error creating note: " + error);
        res.status(500).json({
            "error": "Error creating note"
        });
    }
};

exports.editNotes = async(req, res) => {
    try {
        const id = req.params.id;
        const {title, note_content} = req.body;
        const note = await Note.update({
            title,
            note_content
        },{
            where: {
                note_id: id
            }
        });
        console.log(`Note updated.`);
        res.status(200).json({
            "message": "Note updated",
            note
        })
    } catch (error) {
        console.log("Error updating note: " + error);
    }
} 

exports.deleteNotes =  async(req, res) => {
    try { 
        const id = req.params.id;
        Note.destroy({where: {
            note_id: id
        }})
        res.status(200).json({
            "message": "Note deleted"
        });
    } catch (error) {
        console.log("Error deleting note: " + error);
        res.status(500).json({
            "error": "Error deleting note"
        });
    }
} 