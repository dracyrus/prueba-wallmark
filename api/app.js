/**************************************** IMPORT LIBRARIES ********************************************/
const express = require('express');
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const bodyParser = require('body-parser');


/************************************ IMPORT GRAPHQL SCHEMA ********************************************/
const graphqlSchema = require('./graphql/schema');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.sendStatus(200);

    next();
});

app.use(
    '/graphql', graphqlHTTP((request, response, graphQLParams) => ({
        schema: graphqlSchema,
        graphiql: true,
        customFormatErrorFn(err) {
            if (!err.originalError) return err;
            const data = err.originalError.data;
            const message = err.message || 'An error occurred.';
            const code = err.originalError.code || 500;
            return { message: message, status: code, data: data };
        }
    }))
);

mongoose.connect('mongodb://productListUser:productListPassword@localhost:27017/promotions?authSource=admin')
  .then(result => {
        app.listen(9000, () => {
            console.log(`Server started on http://localhost:9000`);
        });
  }).catch(err => console.log(err));