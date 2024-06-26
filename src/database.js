const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("DB Connected", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();
