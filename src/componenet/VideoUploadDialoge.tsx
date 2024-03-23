import { Form, Modal } from "antd";
import React from "react";
import { useParams } from "react-router";
import useUploadVideo from "../hooks/useUploadVideo";
import UploadProfile from "./UploadProfile";
import VideoUploadBox from "./VideoUploadBox";


const VideoUploadDialoge: React.FC = () => {

  const { courseId } = useParams();

  const {
    uploadLoading,
    base64ImgData,
    handleChange,
    handleOk,
    handleCancel,
    collapsed,
    confirmLoading,
    setVideoFile,
  } = useUploadVideo();

  return (
    <>
      <Modal
        title="Upload Video Thumbnail"
        open={collapsed}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form.Item label="Upload Img">
            <UploadProfile
              base64Data={base64ImgData}
              loading={uploadLoading}
              handleChange={handleChange}
            />
        </Form.Item>

        <VideoUploadBox setVideoFile={setVideoFile} />
      </Modal>
    </>
  );
};

export default VideoUploadDialoge;
