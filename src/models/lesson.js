import mongoose from "mongoose";
const { Schema } = mongoose;

const lessonsSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    intro: {
      type: String,
      required: true,
    },
    exercise: {
      type: String,
      required: true,
    },
    // upsert prevents duplicate ids (unique)
  },
  { timestamps: true, upsert: true }
);

export const Lesson = mongoose.model("Lesson", lessonsSchema);
