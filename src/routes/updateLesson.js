import { Lesson } from "../models/lesson.js";

// for db edits use cd21:***
export const updateLesson = {
  method: "get",
  path: "/update-lesson",
  handler: (req, res) => {
    // todo - replace hardcoding with admin gui

    const lessonId = 1;
    const recordName = "intro";
    const newRecordValue = "This is the new intro to Verbs";

    Lesson.updateOne(
      { id: lessonId },
      { [recordName]: newRecordValue },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      }
    ).then((result) => {
      res.send(result);
    });
  },
};
