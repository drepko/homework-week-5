const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt');

const router = new Router()

router.post('/users', (req, res, next) => {
  if (req.body.password !== req.body.passwordConfirmation) {
    res.status(400).send({
      message: 'Please make sure you fill in the same password twice'
    })
  }
  else {

    const user = {
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    }

    User
      .create(user)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: `User does not exist`
          })
        }
        return res.status(201).send(user)
      })
      .catch(error => next(error))
  }
})

module.exports = router