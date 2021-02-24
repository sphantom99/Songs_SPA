const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 5000

const db = require('./queries')
app.use(cors())
app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)
app.get(express.static('./img'))

app.get('/',db.getSongs)
app.get('/songs/:id',db.getSongById)
app.post('/songs',db.addSong)
app.put('/songs/:id',db.updateSong)
app.delete('/songs/:id',db.deleteSong)

app.listen(port, () =>{
	console.log('App running')
})
