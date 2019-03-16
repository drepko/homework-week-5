const Sequelize = require('sequelize')
const sequelize = require('../db')
const Song = require('../songs/model')

const Playlist = sequelize.define('playlists', {
  name: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false
  },
})

//Playlist.hasMany(Song)

module.exports = Playlist

