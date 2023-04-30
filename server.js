const db = require('./models')
const express = require('express')
const app = express()
const userRoutes = require('./routers/user-routes')
const productRoutes = require('./routers/product-routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', productRoutes)
app.use('/', userRoutes)

db.sequelize.sync().then(() => {
    app.listen(3000, () => console.log('server listening in port 3000'
    ))
})