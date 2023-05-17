import { Card, Col, Row } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import './index.css';
import Line from './Line';

export default function() {

  return (
    <>
      <PageContainer>
        {/*<Row gutter={[48,48]} >*/}
        {/*  <Col span={12} >*/}
        {/*    <Card  title='Card title' bordered={false} style={{height:'400px'}}>*/}
        {/*      {<Line/>}*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*  <Col span={12}>*/}
        {/*    <Card title='Card title' bordered={false}>*/}
        {/*      Card content*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*  <Col span={12}>*/}
        {/*    <Card title='Card title' bordered={false}>*/}
        {/*      Card content*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*  <Col span={12}>*/}
        {/*    <Card title='Card title' bordered={false}>*/}
        {/*      Card content*/}
        {/*    </Card>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        <Line />
      </PageContainer>
    </>
  );
}