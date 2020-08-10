const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
} = graphql;

/**
 * Define Product Type
 * @type {GraphQLObjectType<any, any>}
 */
exports.productType = new GraphQLObjectType({
    name: 'product',
    fields: () => ({
        _id: { type: GraphQLID } ,
        brand: {type: GraphQLString},
        description: {type: GraphQLString},
        id: {type: GraphQLInt},
        image: {type: GraphQLString},
        price: {type: GraphQLInt},
    })
});

exports.productSearch = new GraphQLObjectType({
    name: 'productSearch',
    fields: () => ({
        products: {type: new GraphQLList(this.productType)},
        disccountAmount: {type: GraphQLInt},
        numberProducts: {type: GraphQLInt}
    })
});

