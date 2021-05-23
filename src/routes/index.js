import { home } from "./home.js";
import { allLessons } from "./allLessons.js";
import { addLesson } from "./addLesson.js";
import { updateLesson } from "./updateLesson.js";
import { deleteRecord } from "./deleteRecord.js";
import { lesson } from "./lesson.js";

export const routes = [
  home,
  allLessons,
  lesson,
  addLesson,
  updateLesson,
  deleteRecord,
];
