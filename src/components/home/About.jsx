import React from 'react'
import { Row, Col } from 'antd';
import {
    PieChartOutlined,
    DesktopOutlined,
    DatabaseOutlined
  } from '@ant-design/icons';

const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      title: 'High Performance',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      title: 'Flat Design',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      icon: <DatabaseOutlined />,
      title: 'Simplified Workflow',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
  ]

const About = () => {
  return (
    <div id="about" className='block aboutBlock'>
        <div className='container-fluid'>
            <div className="titleHolder">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="contentHolder">
                <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores voluptas vel unde aliquid voluptates provident? Assumenda, impedit? Ex tempora molestiae asperiores adipisci! Accusamus repudiandae eius magnam blanditiis assumenda reiciendis.</p>
            </div>
            <Row gutter={[16, 16]}>
                {items.map(item => (
                    <Col key={item.key} md={8}>
                        <div className="content">
                            <div className="icon">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    </div>
  )
}

export default About