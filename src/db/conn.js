const mongoose = require("mongoose");

// localhost

// mongoose.connect("mongodb://localhost:27017/practice-db", {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });

// mongodb atlas

mongoose.connect(
  "mongodb+srv://Shahbaz:@Shahbaz786@shahbaz.js35n.mongodb.net/practice-db?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

//Get the default connection
var db = mongoose.connection;

db.on("error", () => {
  console.log("Db is Not Connected");
});

db.on("open", () => {
  console.log("Db is  Connected");
});
