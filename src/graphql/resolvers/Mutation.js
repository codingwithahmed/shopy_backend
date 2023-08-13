const { Items } = require('../../db/models/_index')

module.exports = {
    hello: (parent, args, context, info) => {
        return args.name
    },
    createItem: (parent, args, context, info) => {
        const newItem = {
            name: args.name,
            price: args.price,
            inStock: args.inStock,
            id: args.id
        }
        Items.push(newItem)

        return newItem
    },


}