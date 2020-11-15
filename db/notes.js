const util = require("util");
const fs = require("fs");

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require("uuid/v1");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
  
  read() {
    return readFileAsync("db/db.json", "utf8");
  }

  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  getNotes() {
    console.log("get notes")
    return this.read().then((notes) => {
      let notesArray;

      // If notes isn't an array or can't be turned into one, 
      // send back a new empty array
      try {
        notesArray = [].concat(JSON.parse(notes));
      } catch (err) {
        notesArray = [];
      }

      return notesArray;
    });
  }

  addNotes(note) {
    console.log("add notes")
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }

    // Add a unique id to the note using this id
    const newNote = { title, text, id: uuidv1() };

    // Get all notes, add the new note, write all the updated notes, 
    // return the newNote
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

  removeNote(id) {
    console.log("delete notes")
    // Get all notes, remove the note with the given id, write the filtered notes
    return this.getNotes()
      // .then((notes) => notes.filter((note) => note.id !== parseInt(id)))
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Notes();
