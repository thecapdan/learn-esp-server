import { Lesson } from "../models/lesson.js";

// for db edits use capdan21:***
// example: delete-record/4/exercise?recordId=abc123
export const deleteRecord = {
  method: "get",
  path: "/delete-record/:lessonId/:recordKey",
  handler: (req, res) => {
    const { lessonId, recordKey } = req.params;
    const { recordId } = req.query;
    console.log(`Deleteing from ${lessonId} item with ID: ${recordId}`);

    let dbDeleteObject = { $pull: { [recordKey]: { _id: recordId } } };

    Lesson.updateOne({ id: lessonId }, dbDeleteObject, function (err, docs) {
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
  },
};
