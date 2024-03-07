import { VideoCard } from "./VideoCard";
import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import { Avatar, Button, Switch } from "antd";
import CourseCard from "./CourseCard ";
import VideoUploadDialoge from "./VideoUploadDialoge";
import { useAppDispatch } from "../state/hook";
import { setVDialoge } from "../state/slice-creater/toggleVideoUploadSlice";
import { ImPlay2 } from "react-icons/im";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { setHeading } from "../state/slice-creater/headingTextSlice";

const CourseDetail = () => {
  const disPatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    disPatch(setHeading("Course Detail"));
  }, []);

  return (
    <>
      <div className="px-6 py-4 m-8 shadow-md rounded-md justify-center items-center bg-white relative">
        <div className="grid grid-cols-6 w-full relative">
          <div className="my-12 mr-5 col-span-1 flex flex-col justify-center items-center">
            <img
              className="mb-6"
              src="https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg"
            />
            <div className="w-full flex flex-col items-center gap-1 justify-center">
              <div className="font-medium text-md">Java Development</div>
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
                M-Tech(Cs)
              </div>
              <div className="flex w-full  mt-2 items-center justify-center gap-1">
                <div className="h-1 w-[100%] bg-gray-200">
                  <div className="h-1 w-[80%] bg-blue-400"></div>
                </div>
                <span className="text-[10px] font-semibold">85%</span>
              </div>
            </div>

            <Button
              onClick={() => disPatch(setVDialoge(true))}
              className="absolute bottom-0 "
            >
              Add Video
            </Button>
          </div>

          <div className="border-l  col-span-5  w-full font-medium relative">
            <div className="pl-3 grid grid-cols-3 relative  border-b mt-3 ">
              <div className="col-span-4 absolute top-0 left-3  text-nowrap font-medium text-gray-400 ">
                Couser Detail
              </div>
              <div className="text-gray-400 py-6  ">
                CourseId: <span className="text-black  ">123</span>
              </div>
              <div className="text-gray-400 py-6   ">
                CourseName: <span className="text-black  ">Core Java guid</span>
              </div>
              <div className="text-gray-400 py-6  ml-2  ">
                Category:{" "}
                <span className="text-indigo-500  ">Java Developement</span>
              </div>
            </div>
            <div className="pl-3 grid grid-cols-3 relative  border-b mt-3">
              {/* <div className="col-span-4 absolute top-0 left-3  text-nowrap font-medium text-gray-400 ">
              Health Info.
            </div> */}
              <div className="text-gray-400 py-6  ">
                Number of Video: <span className="text-black   ">4</span>
              </div>
              <div className="text-gray-400 py-6   ">
                isBlock:{" "}
                <span className="text-black  ">
                  {" "}
                  <Switch className="bg-gray-300"></Switch>{" "}
                </span>
              </div>
              <div className="text-gray-400 py-6  ml-2  ">
                Course Fee:
                <span className="text-green-500  "> Rs. 3600</span>
              </div>
            </div>
          </div>
        </div>
        <Button
          type="primary"
          className="absolute right-4 top-2"
          onClick={() => navigate("../edit-course")}
        >
          Edit Detail
        </Button>
      </div>

      <VideoCard />
      <VideoUploadDialoge />
    </>
  );
};

export default CourseDetail;
