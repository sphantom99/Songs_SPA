export async function getAllSongs(){ //fetch func "Select * from cds"
    const res = await fetch('http://localhost:5000/')  
    const songs = await res.json()
    return songs.map(song => {
        return{
            params: {
                id: song.id,
                name: song.name,
                band: song.band,
                length: song.length,
                genre: song.genre
            }
        }
    })
}

export async function getSongData(id){ //fetch func "Select * from cds where id = id"
    const res = await fetch(`http://localhost:5000/songs/${id}`)
    const songs = await res.json()
    return{
        songs
    }
}

export async function addSong(props){ //fetch func "insert into cds values (....)"
    console.log(props)
    
    try{
      const res = await fetch(`http://localhost:5000/songs`, {
        method: 'POST',
       // mode: 'no-cors',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json',
         
        },
        body: JSON.stringify({
          name:props.name,
          band:props.band,
          length:props.length,
          genre:props.genre
        })
      });
    }catch(e){
      console.log(e)
    }
}

