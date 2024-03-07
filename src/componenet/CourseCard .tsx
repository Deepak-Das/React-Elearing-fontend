import { Button } from "antd";
import { Link } from "react-router-dom";

const course = {
  image:
    "https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg",
  title: "Spring boot develpment",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsum ipsam voluptate a temporibus cumque, in placeat molestiae veritatis earum nemo quidem delectus, rem labore eligendi. Modi minima iste maiores.",
};

const CourseCard = () => {
  return (
    <div className="w-[300px] rounded overflow-hidden shadow-lg">
      <img className="w-full" src={course.image} alt={course.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.title}</div>
        <div className="font-semibold text-gray-400 text-sm">
          <div>Date: 25/06/2024</div>
          <div className="">
            Java Develpment <span>(Computer Science)</span>
          </div>
        </div>
        <p className="text-gray-700 text-base truncate text-ellipsis overflow-hidden ">
          {course.description}
        </p>
      </div>
      <div className="px-6 py-4 flex gap-2">
        <Link to={"../course-detail"}>
          <Button type="primary" htmlType="submit" className="bg-[#15395b]">
            View Details
          </Button>
        </Link>
        {/* <Button type="primary" htmlType="submit" className="bg-[#15395b]">
          Edit Videos
        </Button> */}
      </div>
    </div>
  );
};

export default CourseCard;
