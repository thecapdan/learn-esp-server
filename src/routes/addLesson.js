import { Lesson } from "../models/lesson.js";

// for db edits use capdan21:***
export const addLesson = {
  method: "get",
  path: "/add-lesson",
  handler: (req, res) => {
    // todo - replace hardcoding with admin gui
    const lesson = new Lesson({
      id: 3,
      name: "More-Verbs",
      intro: "This is an intro to more-verbs",
      exercise: "This is an exercise on more-verbs",
    });

    lesson
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        if (err.code === 11000) {
          console.log(`Lesson already exists: ${err}`);
          res.send(`<p>Attempt to override existing lesson</p><p>${err}</p>`);
        } else {
          console.log(err);
        }
      });
  },
};
