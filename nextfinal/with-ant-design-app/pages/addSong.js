//ADD SONG PAGE, layout and form used by antd

import { Layout, Menu, Breadcrumb } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import{useRouter} from 'next/router';
import {addSong} from '../lib/songs';
import {useState} from 'react';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = { //messages for required fields with rules
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export default function addPage() {  //main function 
  const router = useRouter(); //use router for navigation buttons
  const { Header, Content, Footer } = Layout;

  return (<Layout className="layout">
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
      <Menu.Item key="1" onClick={()=>{router.push(`./newindextesting`)}}>Home</Menu.Item>
      <Menu.Item key="2" onClick={()=>{router.push(`./newindextesting`)}}>Songs</Menu.Item>
      <Menu.Item key="3">Add a Song</Menu.Item>
    </Menu>
  </Header>
  <Content style={{ padding: '0 50px' }}>

    <Form {...layout} name="nest-messages" onFinish={(values)=> {addSong(values); alert("Song has been added!"); router.push(`./newindextesting`);}} validateMessages={validateMessages}>
      <Form.Item
        name={['name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  />
      </Form.Item>
      <Form.Item
        name={['band']}
        label="Band"
        rules={[]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name={['length']}
        label="length"
        rules={[
          {
            type: 'number',
            min: 0.10,
            max: 10.00,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['genre']} label="Genre">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
};

function addtheSong(values){
  console.log(values);
}
//ReactDOM.render(<Demo />, mountNode);