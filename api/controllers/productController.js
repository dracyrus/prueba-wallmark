/******** IMPORT VALIDATIONS FUNCTIONS *********/
const validation = require('../util/validation');
/******* IMPORT ERROR HANDLE FUNCTIONS ********/
const handleError = require('../util/handleError');
/************** IMPORT MODEL *****************/
const Product = require('../models/product');

/**
 * Function that return all products
 * @returns {Promise<*>}
 */
exports.getProducts = async () => {
    try {
        const products = await Product.find();

        return products;
    } catch (err) {
        throw handleError.createError('products', ['Error executing the request'], 500);
    }
};

/**
 * Function that return product(s) in function a sentence
 * @param req
 * @returns {Promise<*>}
 */
exports.findBySentence = async req => {
    try {
        const sentence = req.params === undefined ? req.sentence : req.params.sentence;
        const page = req.params === undefined ? req.page : req.params.page;

        const errors = validation.validateSentence(sentence);
        if (errors.length > 0) handleError.createError('FindBySentence', errors, 500);

        let isDiscount = validation.isPalindrome(sentence);
        const disccountAmount = (isDiscount) ? 50 : 0;
        const productsResult = await getProductsBySentence(sentence, page);

        const productSearch = {
            products: productsResult.products,
            disccountAmount,
            numberProducts: productsResult.numberProducts
        };

        return productSearch;
    } catch (err) {
        throw handleError.createError('findBySentence', err.data[0], 500);
    }
};

/**
 *
 * @param sentence
 * @param page
 * @returns {Promise<{numberProducts: number, products: *[]}>}
 */
const getProductsBySentence = async (sentence, page) => {
    let products;
    let numberProducts = 1;
    const documentsPerPage = 10;

    try {
        if (isNaN(sentence)) {
            const findCondition = {
                '$or': [
                    {'brand': {'$regex': sentence}},
                    {'description': {'$regex': sentence}},
                ]
            };

            numberProducts = await Product.find(findCondition).countDocuments();

            products = await Product.find(findCondition).skip((page - 1) * documentsPerPage).limit(documentsPerPage);

        } else {
            products = [await Product.findOne({'id': parseInt(sentence)})];
        }

        return {
            products,
            numberProducts
        };
    } catch (err) {
        throw handleError.createError('findBySentence', err.data[0], 500);
    }
}