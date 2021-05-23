import { Lesson } from "../models/lesson.js";

const validRecordKeys = ["exercise", "vocabulary", "intro"];

// for db edits use cd21:***
export const updateLesson = {
  method: "post",
  path: "/update-lesson",
  handler: (req, res) => {
    const updateInfo = req.body;
    const lessonId = updateInfo.id;
    const recordName = updateInfo.record;

    // TODO move logic to models folder
    if (validRecordKeys.includes(recordName)) {
      let dbObject;

      if (recordName === "intro") {
        dbObject = { [recordName]: updateInfo.intro };
      } else {
        // recordName is vocabulary or exercise
        dbObject = { $addToSet: { [recordName]: updateInfo.phrase } };
      }

      Lesson.updateOne({ id: lessonId }, dbObject, function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Docs : ", docs);
        }
      })
        .then((result) => {
          res.send(result);
        })
        .catch((error) => {
          res.status(error.status || 500);
          res.send(error.name);
        });
    } else {
      console.error(`Unrecognised record name: ${recordName}`);
      res.status(400);
      res.send("Unrecognised record name");
    }
  },
};
