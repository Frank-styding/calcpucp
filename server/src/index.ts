import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { getCareers } from "./routers/getCareers";
import { findCourses } from "./routers/findCourses";
import { editCourse } from "./routers/editCourse";
import { deleteCourse } from "./routers/deleteCourse";
import { addCourse } from "./routers/addCourse";
import { getCourses } from "./routers/getCourses";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.post("/add", addCourse);
app.post("/delete", deleteCourse);
app.post("/edit", editCourse);
app.post("/find", findCourses);
app.post("/getCareers", getCareers);
app.post("/getCourses", getCourses);

mongoose.connect("mongodb://localhost:27017/coursesStruct").then(() => {
  console.log("Connected!");
  app
    .listen(PORT, () => {
      console.log("Server running at PORT: ", PORT);
    })
    .on("error", (error) => {
      // gracefully handle error
      throw new Error(error.message);
    });
});
