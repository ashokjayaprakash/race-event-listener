const { dbConnectionString } = require("./config");
const logger = require("./util/logger");
const mongoose = require("mongoose");
const { getResult } = require("./service/track-service");
const { save } = require("./models/Track");

// Init function
(async () => {
  await mongoose.connect(dbConnectionString, { useNewUrlParser: true });
  logger.info("DB connection success");
  // Perform long polling and store the resultset
  await getResult(undefined, save);
})();
