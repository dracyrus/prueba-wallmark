const graphql = require('graphql');
const types = require('./types');

const productController = require('../controllers/productController');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} = graphql;


/**
 * Define the Root Query for Graphql
 * @type {GraphQLObjectType<any, any>}
 */
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        products: {
            type: new GraphQLList(types.productType),
            async resolve(parent, args) {
                return await productController.getProducts();
            }
        },
    }
});

/**
 * Define the Mutation Query for Graphql
 * @type {GraphQLObjectType<any, any>}
 */
const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        findBySentence: {
            type: types.productSearch,
            args: {
                sentence: { type: new GraphQLNonNull(GraphQLString),  },
                page: { type: GraphQLInt }
            },
            async resolve(parent, args) {
                return await productController.findBySentence(args)
            }
        },
    }
});

// Export the schema
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
});