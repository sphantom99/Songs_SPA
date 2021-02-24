import { Layout, Menu, Breadcrumb } from 'antd';
import Head from 'next/head'
import {getAllSongs} from '../lib/songs'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Button} from 'antd'
import "antd/dist/antd.css";
import { List, Avatar } from 'antd';

export async function getServerSideProps(){
  const allSongs = await getAllSongs()//[{id:2,length:3.14},{id:3,length:2.15}]//
  return {
    props: {
      allSongs
    }
  }
}


export default function Songs({allSongs}){
  //console.log(allSongs[0].params.id)
  const router = useRouter()
  if(allSongs.error){
    router.replace('/')
  }
    


const { Header, Content, Footer } = Layout;

return(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
    <div>
      <h2>These Are All The Songs</h2>
      <ul>
       
        {allSongs.map((song)=>(
          <li key={song.params.id}>
           {song.params.id} <a onClick={()=>{router.push('/songs/'+song.params.id)}}>{song.params.name}</a>
          </li>
        ))}
      </ul>
      <Link href="./addSong"><Button type="primary">Add a Song!</Button></Link>
    </div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>

)
}


/*

export default function Songs({allSongs}){
  //console.log(allSongs[0].params.id)
  const router = useRouter()
  if(allSongs.error){
    router.replace('/')
  }
//}

//export default function Home({allSongs}) {
  
  return (
    <div>
      <h2>These Are All The Songs</h2>
      <ul>
       
        {allSongs.map((song)=>(
          <li key={song.params.id}>
           {song.params.id} <a onClick={()=>{router.push('/songs/'+song.params.id)}}>{song.params.name}</a>
          </li>
        ))}
      </ul>
      <Link href="./addSong"><Button type="primary">Add a Song!</Button></Link>
    </div>
  )
}        
*/