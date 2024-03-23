import "./App.css";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddTeacher from "./componenet/AddTeacher";
import { ConfigProvider } from "antd";
import TeacherDetails from "./componenet/TeacherDetails";
import AddCourse from "./componenet/AddCourse";
import CourseDetail from "./componenet/CouserDetails";
import EditCourse from "./componenet/EditCourse";
import EditVideo from "./componenet/EditVideo";
import EditTeacher from "./componenet/EditTeacher";
import ChangePassword from "./componenet/AddAdmin";
import EditAdmin from "./componenet/EditAdmin";
import Home from "./componenet/home/Home";
import UserPage from "./pages/UserPage";
import OnlineCourses from "./componenet/allcourses/OnlineCourses";
import About from "./componenet/about/About";
import Team from "./componenet/team/Team";
import Contact from "./componenet/contact/Contact";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import TeachersList from "./componenet/team/TeachersList";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "courses",
        element: <OnlineCourses />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
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
        element: <TeachersList />,
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
        path: "course-detail/:courseId",
        element: <CourseDetail />,
      },
      {
        path: "edit-course/:courseId",
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

const queryClient = new QueryClient();

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#15395b",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
