require("dotenv").config();
const mongoose = require("mongoose");
mongoURI =
  "mongodb+srv://mbrag:cF5KUVdvif1VFF1Z@cluster0.oxqigj3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.on("open", () => {
  console.log(`DB connected @ ${mongoose.connection.host}`);
});
mongoose.connection.on("error", (err) => {
  console.log(`DB connection failed ${err}`);
  process.exit(1);
});

const mongoConnect = async () => {
  await mongoose.connect(`${mongoURI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = mongoConnect;
