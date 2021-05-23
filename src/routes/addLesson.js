import { Lesson } from "../models/lesson.js";

// for db edits use capdan21:***
export const addLesson = {
  method: "get",
  path: "/add-lesson",
  handler: (req, res) => {
    // todo - replace hardcoding with admin gui
    /*
    const lesson = new Lesson({
      id: 4,
      name: "Practice",
      intro: "Empty",
      vocabulary: [
        {
          eng: "something",
          esp: "algo",
        },
        {
          eng: "to eat",
          esp: "comer",
        },
      ],
      exercise: [
        {
          eng: "I want to eat something different",
          esp: "Quiero comer algo diferente",
        },
        {
          eng: "I need to see the doctor please",
          esp: "Necesito ver al doctor por favor",
        },
      ],
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
      */
  },
};
