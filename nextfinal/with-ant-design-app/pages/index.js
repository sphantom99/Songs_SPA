import Head from 'next/head'
import {getAllSongs} from '../lib/songs'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Button} from 'antd'
import "antd/dist/antd.css";
import { List, Avatar } from 'antd';
export async function getServerSideProps(){
  const allSongs = await getAllSongs()//[{id:2,length:3.14},{id:3,length:2.15}]//
  console.log(allSongs)
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
