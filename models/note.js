
//mongoose required
var mongoose = require("mongoose");

//Schema class created with mongoose
var Schema = mongoose.Schema;

//NoteSchema is a Schema
var NoteSchema = new Schema({
  note: {
    type: String
  }
});

var Note = mongoose.model("Note", NoteSchema);

// Export the model so we can use it on our server file.
module.exports = Note;