import { Layout, Menu, Breadcrumb } from 'antd';
import Head from 'next/head'
import {getAllSongs} from '../lib/songs'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Button} from 'antd'
import "antd/dist/antd.css";
import { Table, Tag, Space } from 'antd';
export async function getServerSideProps(){
    const allSongs = await getAllSongs()//[{id:2,length:3.14},{id:3,length:2.15}]//
    //const edited = allSongs.map((song)=> {return{ id: song.params.id, name: song.params.name, band: song.params.band, length: song.params.length, genre: song.params.genre}})
    //console.log(edited)
    return {
      props: {
        allSongs
      }
    }
  }

export default function indexer({allSongs}){
    const router = useRouter()
    if(allSongs.error){
      router.replace('/')
    }
      
  
  
const { Header, Content, Footer } = Layout;
const { Column, ColumnGroup } = Table;
//console.log(edited)
const data = allSongs.map((song)=> {return{ id: song.params.id, name: song.params.name, band: song.params.band, length: song.params.length, genre: song.params.genre}})
//console.log(data)
/* [ 
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  
  {
      key: 4,
      name: 'The Search',
      band: 'NF',
      length: 3.14,
      genre: 'Pop'
  },
];*/

return(<Layout className="layout">
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