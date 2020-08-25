const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rankingResultSchema = new Schema(
  {
    userEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
    },
    rankedList: [{ rankedUserEmail: String, rank: Number }],
  },
  {
    timestamps: true,
  }
);

const mentorsRankedModel = mongoose.model("mentorsRanked", rankingResultSchema);
const menteesRankedModel = mongoose.model("menteesRanked", rankingResultSchema);

module.exports = {
  mentorsRankedModel,
  menteesRankedModel,
};
