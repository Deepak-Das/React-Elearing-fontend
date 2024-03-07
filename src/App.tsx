import "./App.css";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddTeacher from "./componenet/AddTeacher";
import { ConfigProvider } from "antd";
import CustomTable from "./componenet/CustomTable";
import TeacherDetails from "./componenet/TeacherDetails";
import AddCourse from "./componenet/AddCourse";
import CourseDetail from "./componenet/CouserDetails";
import EditCourse from "./componenet/EditCourse";
import EditVideo from "./componenet/EditVideo";
import EditTeacher from "./componenet/EditTeacher";
import AddAdmin from "./componenet/AddAdmin";
import ChangePassword from "./componenet/AddAdmin";
import EditAdmin from "./componenet/EditAdmin";
import { Home } from "@mui/icons-material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "add-teacher",
        element: <AddTeacher />,
      },
      {
        path: "view-teachers",
        element: <CustomTable />,
      },
      {
        path: "edit-teacher",
        element: <EditTeacher />,
      },
      {
        path: "teacher-detail",
        element: <TeacherDetails />,
      },
      {
        path: "add-course",
        element: <AddCourse />,
      },
      {
        path: "course-detail",
        element: <CourseDetail />,
      },
      {
        path: "edit-course",
        element: <EditCourse />,
      },
      {
        path: "edit-video",
        element: <EditVideo />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "edit-admin",
        element: <EditAdmin />,
      },
    ],
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#15395b",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
