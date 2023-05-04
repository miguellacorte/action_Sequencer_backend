const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },

    compositions: [
      {
        notes: [String],
        drawingX: [Number],
        drawingY: [Number]
      }
    ]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
