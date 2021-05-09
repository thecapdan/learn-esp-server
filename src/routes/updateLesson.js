import { Lesson } from "../models/lesson.js";

// for db edits use cd21:***
export const updateLesson = {
  method: "post",
  path: "/update-lesson",
  handler: (req, res) => {
    const updateInfo = req.body;

    console.log(updateInfo);

    const lessonId = updateInfo.id;
    const recordName = updateInfo.record;

    // TODO move logic to models folder
    if (recordName === "exercise" || recordName == "vocabulary") {
      const newRecordValue = updateInfo.phrase;
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
      const newIntro = updateInfo.intro;
      Lesson.updateOne(
        { id: lessonId },
        { [recordName]: newIntro },
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
