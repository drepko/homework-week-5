const Sequelize = require('sequelize')
const sequelize = require('../db')
//const Playlist = require('../playlist/model')


const Song = sequelize.define('songs', {
  playlistId: {
    type: Sequelize.INTEGER,
    field: 'playlist_id'
  },
  title: {
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING,
    field: 'artist',
    allowNull: false
  },
  album: {
    type: Sequelize.STRING,
    field: 'album',
    allowNull: false
  }
})

//Song.belongsTo(Playlist)

module.exports = Song