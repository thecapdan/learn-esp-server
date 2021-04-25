import { Lesson } from "../models/lesson.js";

export const allLessons = {
  method: "get",
  path: "/all-lessons",
  handler: (req, res) => {
    Lesson.find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
