import React, { useState } from "react";
import { Modal, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const Works = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it works</h2>
          <p>Aliquam ullam fugiat maxime earum omnis!</p>
        </div>
        <div className="contentHolder">
          <Button onClick={showModal} icon={<PlayCircleOutlined />}></Button>
        </div>

        <Modal
          title="How it Works"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  );
};

export default Works;
