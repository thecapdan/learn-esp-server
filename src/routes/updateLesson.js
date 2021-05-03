import { Lesson } from "../models/lesson.js";

// for db edits use cd21:***
export const updateLesson = {
  method: "post",
  path: "/update-lesson",
  handler: (req, res) => {
    // todo - replace hardcoding with admin gui

    const updateInfo = req.body;

    const lessonId = updateInfo.id;
    const recordName = updateInfo.record;
    const newRecordValue = updateInfo.phrase;

    // TODO move logic to models folder
    if (recordName === "exercise" || recordName == "vocabulary") {
      Lesson.updateOne(
        { id: lessonId },
        { $addToSet: { [recordName]: newRecordValue } },
        function (err, docs) {
          if (err) {
            console.log(err);
          } else {
            console.log("Updated Docs : ", docs);
          }
        }
      ).then((result) => {
        res.send(result.status);
      });
    } else if (recordName === "intro") {
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
        res.send(result.status);
      });
    } else {
      console.error(`Unrecognised record name: ${recordName}`);
    }
  },
};
