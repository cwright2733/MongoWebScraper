//Requiring Mongoose
var mongoose = require("mongoose");

//Schema class with mongoose created
var Schema = mongoose.Schema;

//LibrarySchema is a Schema
var ArticleSchema = new Schema({

  //unique string
  title: {
    type: String,
    unique: true
  },
  link: {
      type: String
  },
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

//model saved using LibrarySchema
var Article = mongoose.model("Article", ArticleSchema);

//export model
module.exports = Article;