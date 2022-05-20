import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  ArrowUpOutlined
} from "@ant-design/icons";
import { BackTop } from 'antd';

const AppFooter = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Tech
          </a>
        </div>
        <ul className="socials">
          <li>
            <a href="">
              {" "}
              <FacebookOutlined />
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <TwitterOutlined />
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <LinkedinOutlined />
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <InstagramOutlined />
            </a>
          </li>
          <li>
            <a href="">
              <YoutubeOutlined />
            </a>
          </li>
        </ul>
        <div className="copyright">Copyright &copy; 2022 Tech</div>
        <BackTop>
        <div className="goTop">
        <ArrowUpOutlined size='large' style={{color: 'white'}} /></div>
    </BackTop>
      </div>
    </div>
  );
};

export default AppFooter;
