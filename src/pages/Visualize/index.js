import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const Visualize = () => (
  <Content style={{ margin: '0 16px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>可视化</Breadcrumb.Item>
    </Breadcrumb>
    <div style={{ padding: 24, background: '#fff', minHeight: 800 }}>
      可视化
    </div>
  </Content>
);

export default Visualize;
