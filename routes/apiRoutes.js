const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const uuid = require('uuid')


module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
        let data = JSON.parse(fs.readFileSync("./db/db.json"));
        res.json(data);
    });


    app.post("/api/notes", (req, res) => {
        const createNote = req.body;
        createNote.id = uuidv4();
        let data = JSON.parse(fs.readFileSync("./db/db.json"));
        data.push(createNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        res.json(data);
    });


    app.delete("/api/notes/:id", (req, res) => {
        let noteList = JSON.parse(fs.readFileSync("./db/db.json"));
        let noteId = (req.params.id).toString();
    
        noteList = noteList.filter(selected => {
            return selected.id != noteId;
        })
    
        fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
        res.json(noteList);
    });
};

