"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var getCareers_1 = require("./routers/getCareers");
var findCourses_1 = require("./routers/findCourses");
var editCourse_1 = require("./routers/editCourse");
var deleteCourse_1 = require("./routers/deleteCourse");
var addCourse_1 = require("./routers/addCourse");
var getCourses_1 = require("./routers/getCourses");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
var PORT = process.env.PORT;
app.post("/add", addCourse_1.addCourse);
app.post("/delete", deleteCourse_1.deleteCourse);
app.post("/edit", editCourse_1.editCourse);
app.post("/find", findCourses_1.findCourses);
app.post("/getCareers", getCareers_1.getCareers);
app.post("/getCourses", getCourses_1.getCourses);
mongoose_1.default.connect("mongodb://localhost:27017/coursesStruct").then(function () {
    console.log("Connected!");
    app
        .listen(PORT, function () {
        console.log("Server running at PORT: ", PORT);
    })
        .on("error", function (error) {
        // gracefully handle error
        throw new Error(error.message);
    });
});
