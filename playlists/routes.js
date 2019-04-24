const { Router } = require('express')
const Playlist = require('./model')
const Song = require('../songs/model')
const auth = require('../auth/middleware')

const router = new Router()

router.post('/playlists', auth, (req, res, next) => {
    Playlist
        .create(req.body)
        .then(playlist => {
            if (!playlist) {
                return res.status(404).send({
                    message: `Playlist does not exist`
                })
            }
            return res.status(201).send(playlist)
        })
        .catch(error => next(error))
})

router.get('/playlists', auth, (req, res, next) => {
    Playlist
        .findAll()
        .then(playlists => {
            res.send({ playlists })
        })
        .catch(error => next(error))
})

router.get('/playlists/:id', auth, (req, res, next) => {
    Playlist
        .findByPk(req.params.id,
            {include: [Song]}
        )
        .then(playlist => {
            if (!playlist) {
                return res.status(404).send({
                    message: `Playlist does not exist`
                })
            }
            return res.send(playlist)
        })
        .catch(error => next(error))
})

router.post('/playlists/:id/songs', auth, (req, res, next) => {
    Playlist
        .findByPk(req.params.id)
        .then(playlist => {
            const { title, artist, album } = req.body
            const song = Song.create({
                title: title,
                artist: artist,
                album: album,
                playlistId: playlist.id
            })
            return song

        })
        .then(song => { return res.status(201).send(song) })
        .catch(error => console.log(error))
})

// router.delete('/playlists/:id', (req, res, next) => {
//   Playlist
//     .findByPk(req.params.id)
//     .then(playlist => {
//       if (!playlist) {
//         return res.status(404).send({
//           message: `Playlist does not exist`
//         })
//       }
//       return playlist.destroy()
//         .then(() => res.send({
//           message: `Playlist was deleted`
//         }))
//     })
//     .catch(error => next(error))
// })

module.exports = router