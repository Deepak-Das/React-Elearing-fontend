import { VideoCard } from "./VideoCard";
import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import { Avatar, Button, Switch } from "antd";
import CourseCard from "./CourseCard ";
import VideoUploadDialoge from "./VideoUploadDialoge";
import { useAppDispatch, useAppSelector } from "../state/hook";
import { setVDialoge } from "../state/slice-creater/toggleVideoUploadSlice";
import { ImPlay2 } from "react-icons/im";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { setHeading } from "../state/slice-creater/headingTextSlice";
import { useQuery } from "@tanstack/react-query";
import { getCourseById } from "../service/CourseService";
import { BASE_URL } from "../service/axios";

const CourseDetail = () => {
  const disPatch = useAppDispatch();

  const dialogecollapse = useAppSelector(
    (state) => state.videoUploadDialoge.collapse
  );

  const navigate = useNavigate();

  const { courseId } = useParams();
  const { data } = useQuery({
    queryKey: ["singleCourse", dialogecollapse],
    queryFn: () => getCourseById({ courseId }),
  });

  useEffect(() => {
    disPatch(setHeading("Course Detail"));
    console.log(data);
  }, []);

  return (
    <>
      <div className="px-6 py-4 m-8 shadow-md rounded-md justify-center items-center bg-white relative">
        <div className="grid grid-cols-6 w-full relative">
          <div className="my-12 mr-5 col-span-1 flex flex-col justify-center items-center">
            <img className="mb-6" src={BASE_URL + "/file/" + data?.courseImg} />
            <div className="w-full flex flex-col items-center gap-1 justify-center">
              <div className="font-medium text-md"> {data?.title}</div>
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
                {data?.category}
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
                CourseId: <span className="text-black  ">{data?.courseId}</span>
              </div>
              <div className="text-gray-400 py-6   ">
                CourseName: <span className="text-black  ">{data?.title}</span>
              </div>
              <div className="text-gray-400 py-6  ml-2  ">
                Category:{" "}
                <span className="text-indigo-500  ">{data?.category}</span>
              </div>
            </div>
            <div className="pl-3 grid grid-cols-3 relative  border-b mt-3">
              {/* <div className="col-span-4 absolute top-0 left-3  text-nowrap font-medium text-gray-400 ">
              Health Info.
            </div> */}
              <div className="text-gray-400 py-6  ">
                Number of Video:{" "}
                <span className="text-black   ">{data?.videos.length}</span>
              </div>
              <div className="text-gray-400 py-6   ">
                isBlock:{" "}
                <span className="text-black  ">
                  <Switch
                    className="bg-gray-300"
                    value={data?.isBlock}
                  ></Switch>{" "}
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
          onClick={() => navigate(`../edit-course/${courseId}`)}
        >
          Edit Detail
        </Button>
      </div>
      {data?.videos.map((item) => (
        <VideoCard title={item.title} img={item.thumbnail} description={""} />
      ))}
      <VideoUploadDialoge />
    </>
  );
};

export default CourseDetail;
