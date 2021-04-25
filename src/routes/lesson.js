import { Lesson } from "../models/lesson.js";

export const lesson = {
  method: "get",
  path: "/lesson/:id",
  handler: (req, res) => {
    const { id } = req.params;
    Lesson.findOne({ id: id })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
