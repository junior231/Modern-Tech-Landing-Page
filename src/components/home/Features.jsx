import React from 'react'
import { Row, Col, Card} from 'antd';
import image1 from '../../images/modern-design.jpg';
import image2 from '../../images/clean-design.jpg';
import image3 from '../../images/great-support.jpg';
import image4 from '../../images/easy-customise.jpg';
import image5 from '../../images/unlimited-features.jpg';
import image6 from '../../images/advanced-option.jpg';


const featureData = [
    {
        id: 1,
        title: 'Modern Design',
        img: image1
    },
    {
        id: 2,
        title: 'Clean and Elegant',
        img: image2
    },
    {
        id: 3,
        title: 'Great Support',
        img: image3
    },
    {
        id: 4,
        title: 'Easy to Customize',
        img: image4
    },
    {
        id: 5,
        title: 'Unlimited Features',
        img: image5
    },
    {
        id: 6,
        title: 'Advanced Options',
        img: image6
    },
]


const { Meta } = Card;

const Features = () => {
  return (
    <div id="feature" className='block featureBlock bgGray'>
        <div className="container-fluid">
            <div className="titleHolder">
                <h2>Key Features and Benefits</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        <Row gutter={[16, 16]}>
            {featureData.map(item => {
                return (
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} key={item.id}>
                        <Card
                            cover={<img alt={item.title} src={item.img} />} 
                            hoverable
                            key={item.id}>
                            <Meta title={item.title} />
                        </Card>
                    </Col>
                )
            })}
        </Row>
        </div>
    </div>
  )
}

export default Features