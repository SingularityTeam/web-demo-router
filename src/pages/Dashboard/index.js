import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const DashBoard = () => (
  <Content style={{ margin: '0 16px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>仪表盘</Breadcrumb.Item>
    </Breadcrumb>
    <div style={{ padding: 24, background: '#fff', minHeight: 800 }}>
      仪表盘
    </div>
  </Content>
);

export default DashBoard;
