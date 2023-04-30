const express = require('express')
const route = express.Router()
const db = require('../models')






route.post('/createproduct', (req, res, next) => {
    db.Product.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        country: req.body.country,
        UserId: req.body.UserId


    }).then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

})


route.get('/product/:id', (req, res, next) => {

    db.Product.findOne({ where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

})

route.get('/products', (req, res, next) => {

    db.Product.findAll()
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

})
route.patch('/product/:id', (req, res, next) => {

    db.Product.update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        country: req.body.country,
        UserId: req.body.UserId


    }, { where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

}


)
route.delete('/product/:id', (req, res, next) => {

    db.Product.destroy({ where: { id: req.params.id } }, { where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

}


)

module.exports = route