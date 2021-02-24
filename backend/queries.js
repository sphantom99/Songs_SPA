const Pool = require('pg').Pool
const pool = new Pool({
	user: 'sphantom99',
	host: 'localhost',
	database: 'cds',
	password: '1234',
	port: 5432,
})

const getSongs = async (request, response) => {
	try
	{
		const client = await pool.connect()
		const results = await client.query('SELECT * FROM cds ORDER BY ID')
		response.status(200).json(results.rows)
		client.release()
		console.log(results.rows)
	}	
	catch(e)
	{
		console.log(e)
	}	
}

const getSongById = async (request,response) =>{
	try
	{
		const client = await pool.connect()
		const id = parseInt(request.params.id)
		const results = await client.query('SELECT * FROM cds WHERE ID = $1',[id])
		console.log(results.rows)	
		response.status(200).json(results.rows)
		client.release()	
	}
	catch(e)
	{
		console.log(e)
	}
}

const addSong = async (request, response) => {
	try
	{
		
		const client = await pool.connect()
		const{name,band,length,genre} = request.body
		console.log(name,band,length,genre)
		const results = await client.query('INSERT INTO cds (name,band,length,genre) VALUES ($1,$2,$3,$4)',[name,band,length,genre])
		response.status(201).send('Song Added!')
		client.release()
	}
	catch(e)
	{
		console.log(e)
	}
}


const updateSong = async (request,response) => {
	try
	{
		const id = parseInt( request.params.id)
		const {name,band,length,genre} = request.body
		const client = await pool.connect()
		const results = await client.query('UPDATE cds SET name = $1, band = $2, length = $3, genre = $4 WHERE ID = $5',[name,band,length,genre,id])
		response.status(200).send('Updated song with ID = ${id}')
		client.release()
	}
	catch(e)
	{
		console.log(e)
	}
	
	
}

const deleteSong =async (request,response) => {
	try
	{
		const id = parseInt(request.params.id)
		const client = await pool.connect()
		const results = await client.query('DELETE FROM cds WHERE ID = $1',[id])
		response.status(200).send('Deleted Song with ID = ${id}')
		client.release()
	}
	catch(e)
	{
		console.log(e)
	}
	

}



module.exports = {
	getSongs,
	getSongById,
	addSong,
	updateSong,
	deleteSong,
}
