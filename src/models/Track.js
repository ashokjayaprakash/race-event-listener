const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const HorseSchema = new Schema({
  id: Number,
  name: String,
});

const TrackSchema = new Schema({
  id: ObjectId,
  event: String,
  horse: HorseSchema,
  time: Number,
});

const Track = mongoose.model("track", TrackSchema);

async function save(track) {
  let trackSchema = new Track(track);
  await trackSchema.save();
}

module.exports = {
  save,
};
