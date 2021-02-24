import { Layout, Menu, Breadcrumb } from 'antd';
import Head from 'next/head'
import {getAllSongs} from '../lib/songs'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Button} from 'antd'
import "antd/dist/antd.css";
import { Table, Tag, Space } from 'antd';
export async function getServerSideProps(){
    const allSongs = await getAllSongs()// getAllSongs -> ../lib/songs //[{id:2,length:3.14},{id:3,length:2.15}]
    return {
      props: {
        allSongs
      }
    }
  }

export default function indexer({allSongs}){ //main function
  const router = useRouter()
  if(allSongs.error){
    router.replace('/')
  }
      
  
  
  const { Header, Content, Footer } = Layout;
  const { Column, ColumnGroup } = Table;
  const data = allSongs.map((song)=> {return{ id: song.params.id, name: song.params.name, band: song.params.band, length: song.params.length, genre: song.params.genre}})

  return(
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Songs</Menu.Item>
        <Menu.Item key="3" onClick={()=>router.push(`./addSong`)}>Add a Song</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>


      <Table dataSource={data}>
        <ColumnGroup title="These Are All The Songs">
          <Column title="Name" dataIndex="name" key="name" />
        <Column title="Band" dataIndex="band" key="band" />
        <Column title="length" dataIndex="length" key="length" />
        <Column
          title="Genre"
          dataIndex="genre"
          key="genre"
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Edit</a>
              <a onClick={()=>{router.push(`./addSong`)}}>Delete</a>
            </Space>
          )}
        />
        </ColumnGroup>
      </Table>
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
}