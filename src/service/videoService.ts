import axios from "./axios";

interface Props {
  courseId: number | string | undefined;
  data: any;
}

export const UploadVideoThum = async ({ courseId, data }: Props) => {
  axios.post(`upload/course/${courseId}/video`, data, {
    headers: { "content-type": "multipart/form-data" },
  });
};

// export const UploadVideoThum = async ({ courseId, data }: Props) => {
//   axios.get(`/video`);
// };
