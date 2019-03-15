// const express = require('express')
// const app = express()
// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres', {define: { timestamps: false }})
// const port = 4000

// app.get('/blabla', function (req, res, next) {
//     res.json({ message: 'Read jshdkjasda' })
//   })


// app.listen(port, () => `Listening on port ${port}`)

const express = require('express')
const bodyParser = require('body-parser')
const songsRouter = require('./songs/routes')
const playlistsRouter = require('./playlists/routes')

const app = express()
const port = process.env.PORT || 4000

app
  .use(bodyParser.json())
  .use(songsRouter, playlistsRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))




  

