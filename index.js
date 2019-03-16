const express = require('express')
const bodyParser = require('body-parser')
const songsRouter = require('./songs/routes')
const playlistsRouter = require('./playlists/routes')
const usersRouter = require('./users/routes')
const jwtRouter = require('./auth/routes')

const app = express()
const port = process.env.PORT || 4000

app
  .use(bodyParser.json())
  .use(songsRouter, playlistsRouter, usersRouter, jwtRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))






