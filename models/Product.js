module.exports = (sequelize, Datatype) => {
    const Product = sequelize.define('Product', {
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
    Product.associate = models => {
        Product.belongsTo(models.User, {
            onDelete: "cascade"

        })
    }

    return Product;
}