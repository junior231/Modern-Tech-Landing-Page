import React, { useState } from "react";
import { Anchor, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Link } = Anchor;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="" target="_self">
            Tech
          </a>
        </div>
        <div className="mobileHidden">
          <Anchor affix={false}>
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />

          <Drawer
            width={200}
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <Anchor affix={false}>
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
