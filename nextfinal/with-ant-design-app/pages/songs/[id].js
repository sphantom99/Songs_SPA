import {getAllSongs,getSongData} from '../../lib/songs'
import {useRouter} from 'next/router'

export async function getServerSideProps(context){
    //const router = useRouter()
    //const {id} = router.query
    const songData = await getSongData(context.params.id)//{id: 2,name:"The Search", length:2.15, band:"nf", genre: "pop"}//
    console.log(songData)
    return{
        props: {
            songData
        }
    }
}
/*
export async function getStaticPaths() {
    const paths = getAllSongs()
    idpaths = song.map(path => {
        return {params:{id: path.params.id}}
        });
    return {
        idpaths,
        fallback: false
    }
}
*/
export default function Song({songData}){
    return(
        <div>
        {songData.songs[0].name}
        <br/>
        {songData.songs[0].band}
        <br/>
        {songData.songs[0].length}
        <br/>
        {songData.songs[0].genre}
        </div>
    )
}