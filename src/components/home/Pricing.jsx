import React from "react";
import { List, Card, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

const data = [
  {
    id: 1,
    title: "Basic",
    content: [
      {
        key: 1,
        price: "£29.99",
        space: "1 GB of space",
        user: "1 user",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
  {
    id: 2,
    title: "Premium",
    content: [
      {
        key: 2,
        price: "£59.99",
        space: "5 GB of space",
        user: "5 users",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    content: [
      {
        key: 3,
        price: "£99.99",
        space: "Unlimited space",
        user: "15 users",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose a plan to fit your needs</h2>
          <p>
            Debitis itaque minima dolorum fuga aperiam inventore, quidem enim
          </p>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item >
              <Card key={item.id} title={item.title}>
                {item.content.map(c => (
                  <div key={c.key}>
                    <p className="large" key={`${c.price}${c.key}`}>
                      {c.price}
                    </p>
                    <p key={`${c.space}${c.key}`}>{c.space}</p>
                    <p key={`${c.user}${c.key}`}>{c.user}</p>
                    <p key={`${c.backup}${c.key}`}>{c.backup}</p>
                    <p key={`${c.access}${c.key}`}>{c.access}</p>
                  </div>
                ))}
                <Button icon={<SendOutlined />} type="primary" size="large">
                   Get Started
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Pricing;
