const config = require("./utils/config");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exzit(1);
}

const password = process.argv[2];

const url = config.MONGODB_URI;

logger.info("connecting to database");
mongoose.set("strictQuery", false);
mongoose.connect(url).then(() => {
  const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  });

  const Note = mongoose.model("Note", noteSchema);

  /*
  const note = new Note({
    content: 'HTML is x',
    important: true,
  })

  note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
  })
  */
  Note.find({}).then((result) => {
    result.forEach((note) => {
      console.log(note);
    });
    mongoose.connection.close();
  });
});