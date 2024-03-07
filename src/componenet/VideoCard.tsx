import { Button } from "antd";
import { ImPlay2 } from "react-icons/im";
import { useNavigate } from "react-router";

export function VideoCard({}) {

  const navigate=useNavigate();

  return (
    <div className="p-4 m-8 shadow-md rounded-md   bg-white">
      <div className="flex">
        <div className="mr-4 relative ">
          <img src="https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ImPlay2 size={32} className="text-slate-50" />
          </span>
        </div>
        <div className="text-gray-800 font-medium flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="underline text-gray-400">Video Title</div>
            <div className="text-gray-600 font-normal">
              Beginner guid to Java.
            </div>
          </div>

          <div className="flex flex-col">
            <div className="underline text-gray-400">Description</div>
            <div className="text-gray-600 font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem commodi voluptatum sed perferendis quos, ducimus
              possimus culpa illo nulla provident fugiat, ullam est pariatur!
              Animi exercitationem expedita eveniet itaque asperiores.
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col">
              <div className="underline text-gray-400">Category</div>
              <div className="text-gray-600 font-normal">Java Developement</div>
            </div>

            <div className="flex flex-col">
              <div className="underline text-gray-400">Study Materials</div>
              <div className="text-gray-600 font-normal">
                http//:wwww.studm.com
              </div>
              <div className="text-gray-600 font-normal">
                http//:wwww.studm.com
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="primary" onClick={() => navigate("../edit-video")}>
              {" "}
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
