import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import { Avatar, Button } from "antd";
import CourseCard from "./CourseCard ";
import { useNavigate } from "react-router";
import { useAppSelector } from "../state/hook";
import useCousreList from "../hooks/useCousreList";
import moment from "moment";
import { BASE_URL } from "../service/axios";

const TeacherDetails = () => {
  const navigate = useNavigate();
  const TeacherDetails = useAppSelector((state) => state.editState.teacher);

  const { data } = useCousreList({ teacherId: TeacherDetails?.teacherId || 0 });

  return (
    <>
      <div className="px-6 py-4 m-8 shadow-md rounded-md justify-center items-center bg-white">
        <div className="grid grid-cols-6 w-full relative">
          <div className="my-12 mr-5 col-span-1 flex flex-col justify-center items-center">
            <Avatar
              className="mb-6"
              size={100}
              src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
            />
            <div className="w-full flex flex-col items-center gap-1 justify-center">
              <div className="font-medium text-md">
                {TeacherDetails?.firstName + " " + TeacherDetails?.lastName}
              </div>
              <div className=" flex gap-1 ">
                <div className="">
                  <Star className="text-yellow-400" fontSize="small" />
                  <Star className="text-yellow-400" fontSize="small" />
                  <Star className="text-yellow-400" fontSize="small" />
                  <StarHalf className="text-yellow-400" fontSize="small" />
                  <StarOutline className="text-yellow-400" fontSize="small" />
                </div>
                <div className="text-[.75rem] mt-1 font-medium text-gray-400">
                  214 rating
                </div>
              </div>
              <div className="text-[12px] font-semibold text-gray-400">
                {TeacherDetails?.qualification}
              </div>
              <div className="flex w-full  mt-2 items-center justify-center gap-1">
                <div className="h-1 w-[100%] bg-gray-200">
                  <div className="h-1 w-[80%] bg-blue-400"></div>
                </div>
                <span className="text-[10px] font-semibold">85%</span>
              </div>
            </div>
            <Button
              className="absolute bottom-0 "
              onClick={() => navigate("../add-course")}
            >
              Add Course
            </Button>
          </div>
          <div className="border-l  col-span-5  w-full">
            <div className="pl-3 grid grid-cols-3 relative  border-b mt-3">
              <div className="col-span-4 absolute top-0 left-3  text-nowrap font-medium text-gray-400 ">
                User Profile
              </div>
              <div className="text-gray-400 py-6  ">
                Gender: <span className="text-black  ">Male</span>
              </div>
              <div className="text-gray-400 py-6   ">
                DOB:{" "}
                <span className="text-black  ">
                  {TeacherDetails?.dob.toString()}
                </span>
              </div>
              <div className="text-gray-400 py-6  ml-2  ">
                Phone No:{" "}
                <span className="text-indigo-500  ">+91-9864251145</span>
              </div>
            </div>
            <div className="pl-3 grid grid-cols-3 relative  border-b mt-3">
              {/* <div className="col-span-4 absolute top-0 left-3  text-nowrap font-medium text-gray-400 ">
              Health Info.
            </div> */}
              <div className="text-gray-400 py-6  ">
                Bool Type: <span className="text-black  ">B+</span>
              </div>
              <div className="text-gray-400 py-6   ">
                Language:{" "}
                <span className="text-black  ">{TeacherDetails?.language}</span>
              </div>
              <div className="text-gray-400 py-6  ml-2  ">
                Experience:
                <span className="text-indigo-500  ">
                  {" "}
                  {TeacherDetails?.experience} yrs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 m-8 shadow-md rounded-md  flex  justify-around bg-white">
        {data?.data.map((item) => (
          <CourseCard
            description={item.description}
            image={BASE_URL + "/file/" + item.courseImg}
            title={item.title}
            category={item.category}
            date={moment(item.createDate).format("YYYY-MM-DD")}
          />
        ))}
      </div>
    </>
  );
};

export default TeacherDetails;
