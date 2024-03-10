import { MaterialReactTable } from "material-react-table";
import { useTeacherList } from "../../hooks/useTeacherList";
import { Spin } from "antd";

const TeachersList = () => {
  const { table, isLoading, isError } = useTeacherList();
  if (isError) {
    return (
      <div className="p-4 m-6 rounded-lg  bg-white">
        <h2>please try later, something went wrong</h2>
      </div>
    );
  } else if (isLoading) {
    return <Spin tip="Please Wait fetching data" fullscreen></Spin>;
  } else
    return (
      <div className="p-4 m-6 rounded-lg  bg-white">
        <MaterialReactTable table={table} />
      </div>
    );
};

export default TeachersList;
