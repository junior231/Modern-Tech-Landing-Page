import React from "react";
import { Collapse, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="How Can i Get In Touch" key="1">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Panel>
          <Panel header="Can i change or opt out of my plan" key="2">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Panel>
          <Panel header="Do i get a discount for yearly subscriptions" key="3">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Panel>
          <Panel header="How to setup my account" key="4">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Panel>
          <Panel header="How to upgrade my account" key="5">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want Quick Suport</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            quibusdam atque aliquam animi incidunt tempora quis numquam veniam?
          </p>
          <Button icon={<MailOutlined />} type="primary">
            Email your questions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
