import React, { useState } from "react";
import { Button, Modal } from "antd";
import VideoUploadBox from "./VideoUploadBox";
import { useAppDispatch, useAppSelector } from "../state/hook";
import { useNavigate } from "react-router";
import { setVDialoge } from "../state/slice-creater/toggleVideoUploadSlice";

const VideoUploadDialoge: React.FC = () => {
  const collapsed = useAppSelector(
    (state) => state.videoUploadDialoge.collapse
  );
  const disPatch = useAppDispatch();

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    disPatch(setVDialoge(true));
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      disPatch(setVDialoge(false));
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    disPatch(setVDialoge(false));
  };

  return (
    <>
      <Modal
        title="Upload Video"
        open={collapsed}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <VideoUploadBox />
      </Modal>
    </>
  );
};

export default VideoUploadDialoge;
