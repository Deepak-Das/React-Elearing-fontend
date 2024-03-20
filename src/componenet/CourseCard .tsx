import { Button } from "antd";
import { Link } from "react-router-dom";

// interface Props {
//   image:
//     "https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg",
//   title: "Spring boot develpment",
//   description:
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsum ipsam voluptate a temporibus cumque, in placeat molestiae veritatis earum nemo quidem delectus, rem labore eligendi. Modi minima iste maiores.",
// };
interface Props {
  image: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

const CourseCard = ({ title, description, image, category, date }: Props) => {
  return (
    <div className="w-[300px] rounded overflow-hidden shadow-lg">
      <img className="w-full h-64" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-semibold text-gray-400 text-sm">
          <div>Date: {date}</div>
          <div className="">
            {/* Java Develpment <span>(Computer Science)</span> */}
            {category}
          </div>
        </div>
        <p className="text-gray-700 text-base truncate text-ellipsis overflow-hidden ">
          {description}
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
