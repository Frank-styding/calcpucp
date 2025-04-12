import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Courses } from "./pages/Courses";
import { Course } from "./pages/Course";
import { AddCourse } from "./pages/addCourse";
import { Settings } from "./pages/Settings";
import { Statistics } from "./pages/Statistics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Courses />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/courses/:name" element={<Course />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
