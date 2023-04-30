
module.exports = (sequelize, Datatype) => {
    const Profil = sequelize.define('Profil', {
        firstname: {
            type: Datatype.STRING,
            allowNULL: false
        },
        lastname: {
            type: Datatype.STRING,
            allowNULL: false
        }
        ,
        country: {
            type: Datatype.STRING,
            allowNULL: false
        },



    })
    Profil.associate = models => {
        Profil.belongsTo(models.User, {
            onDelete: "cascade"

        })
    }

    return Profil;
}