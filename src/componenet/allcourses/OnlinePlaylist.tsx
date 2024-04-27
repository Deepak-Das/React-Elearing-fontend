import { useQuery } from "@tanstack/react-query";
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Video } from "../../model/CourseModel";
import { getCourseById } from "../../service/CourseService";
import { BASE_URL } from "../../service/axios";
import Heading from "../common/heading/Heading";
import Hero from "../home/hero/Hero";
import "./courses.css";

const OnlinePlaylist = () => {
  const { cId } = useParams();
  const { data } = useQuery({
    queryKey: ["singleCoursef", cId],
    queryFn: () => getCourseById({ courseId: cId }),
  });
  const [currUrl, setCurUrl] = useState(
    `http://localhost:9090/api/file/${data?.videos[0].fileName}`
  );
  const [img, setImg] = useState<string>(
    `${BASE_URL}/file/${data?.videos[0].thumbnail}`
  );
  const setVideo = (video: Video) => {
    setCurUrl(`http://localhost:9090/api/file/${video.fileName}`);
    setImg(`${BASE_URL}/file/${video.thumbnail}`);
  };

  useEffect(() => {
    setCurUrl(`http://localhost:9090/api/file/${data?.videos[0].fileName}`);
    setImg(`${BASE_URL}/file/${data?.videos[0].thumbnail}`);
  }, [currUrl, img]);

  return (
    <>
      <Hero />
      <section className="">
        <div className="container">
          <Heading subtitle="COURSES" title={data?.title + ""} />

          <div className="flex justify-center">
            {data?.videos && (
              <video
                className="mx-4"
                width="700"
                height="600"
                poster={img}
                controls
              >
                <source src={currUrl} type="video/mp4" />
              </video>
            )}
          </div>

          <div className="h-1 mt-10 w-full bg-gray-500"></div>

          <div className="flex w-full justify-around m-20 flex-wrap">
            {data?.videos.map((item) => (
              // <VideoCard
              //   title={item.title}
              //   img={item.thumbnail}
              //   description={""}
              //   file={item.fileName}
              // />
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src={`${BASE_URL}/file/${item.thumbnail}`}
                  />
                }
              >
                <Meta
                  title={
                    <Button onClick={() => setVideo(item)}>Play Video</Button>
                  }
                  description={item.title}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlinePlaylist;
