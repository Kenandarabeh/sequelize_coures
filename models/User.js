
module.exports = (sequelize, Datatype) => {
    const User = sequelize.define('User', {
        username: {
            type: Datatype.STRING,
            allowNULL: false
        },
        email: {
            type: Datatype.STRING,
            allowNULL: false
        }
        ,
        password: {
            type: Datatype.STRING,
            allowNULL: false
        },



    })
    User.associate = models => {
        User.hasMany(models.Product, {
            onDelete: "cascade"
        })
        User.hasOne(models.Profil, {
            onDelete: "cascade"

        })
    }

    return User
}