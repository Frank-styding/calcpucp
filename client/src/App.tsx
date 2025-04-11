import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Courses } from "./pages/Courses";
import { Course } from "./pages/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Courses />} />
          <Route path="/settings" />
          <Route path="/search" />
          <Route path="/statistics" />
          <Route path="/courses/:name" element={<Course />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
