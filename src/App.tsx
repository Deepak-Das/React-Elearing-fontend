import "./App.css";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddTeacher from "./componenet/AddTeacher";
import { ConfigProvider } from "antd";
import CustomTable from "./componenet/CustomTable";
import TeacherDetails from "./componenet/TeacherDetails";

const router = createBrowserRouter([
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
        path: "teacher-details",
        element: <TeacherDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorPrimary: "#15395b",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
