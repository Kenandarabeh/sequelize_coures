const express = require('express')
const route = express.Router()
const db = require('../models')
const bcrypt = require('bcrypt')





route.post('/register', (req, res, next) => {

    db.User.count({ where: { email: req.body.email } }).then(result => {
        if (result != 0) {
            res.status(400).send("This email is used");
        } else {

            bcrypt.hash(req.body.password, 10).then(hashPassword => {
                db.User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashPassword,


                }).then((response) => res.status(200).send(response))
                    .catch((err) => res.status(400).send(err))
            })

        }
    })


})


route.get('/user/:id', (req, res, next) => {

    db.User.findOne({ where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

})

route.get('/users', (req, res, next) => {

    db.User.findAll()
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

})
route.patch('/user/:id', (req, res, next) => {

    db.User.update({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }, { where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

}


)
route.delete('/user/:id', (req, res, next) => {

    db.User.destroy({ where: { id: req.params.id } }, { where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

}


)

module.exports = route