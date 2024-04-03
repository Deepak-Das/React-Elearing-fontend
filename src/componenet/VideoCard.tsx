import { Title } from "@mui/icons-material";
import { Button } from "antd";
import { ImPlay2 } from "react-icons/im";
import { useNavigate } from "react-router";
import { BASE_URL } from "../service/axios";

interface Props {
  img: string | undefined | null;
  title: string | undefined | null;
  description: string | undefined | null;
  file:string
}

export function VideoCard({ description, img, title,file }: Props) {
  const navigate = useNavigate();

  return (
    <div className="p-4 m-8 shadow-md rounded-md   bg-white">
      <div className="flex">
        {/* <div className="mr-4 relative ">
          <img
            // src="https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg"
            src={`${BASE_URL}/file/${img}`}
          />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ImPlay2 size={32} className="text-slate-50" />
          </span>
        </div> */}

        <video
          className="mx-4"
          width="400"
          height="200"
          poster={`${BASE_URL}/file/${img}`}
          controls
        >
          <source
            src={`http://localhost:9090/api/file/${file}`}
            type="video/mp4"
          />
        </video>

        <div className="text-gray-800 font-medium flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="underline text-gray-400">Video Title</div>
            <div className="text-gray-600 font-normal">{title || "NUll"}</div>
          </div>

          <div className="flex flex-col">
            <div className="underline text-gray-400">Description</div>
            <div className="text-gray-600 font-normal">
              {description || "NUll"}
            </div>
          </div>

          <div className="flex gap-8">
            {/* <div className="flex flex-col">
              <div className="underline text-gray-400">Category</div>
              <div className="text-gray-600 font-normal">Java Developement</div>
            </div> */}

            {/* <div className="flex flex-col">
              <div className="underline text-gray-400">Study Materials</div>
              <div className="text-gray-600 font-normal">
                http//:wwww.studm.com
              </div>
              <div className="text-gray-600 font-normal">
                http//:wwww.studm.com
              </div>
            </div> */}
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
