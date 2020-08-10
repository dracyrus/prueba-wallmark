/**
 *
 */
export const formatNumber = price => {
    return new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(price);
};

/**
 *
 * @param data
 * @param sentence
 * @returns {{data: {sentence: *, numberProducts: *, disccountAmount: *, products: *}}}
 */
export const getNewObjectCache = (data, sentence) => {
    const newData = {
        disccountAmount: data.findBySentence.disccountAmount,
        sentence: sentence,
        products: data.findBySentence.products,
        numberProducts: data.findBySentence.numberProducts,
    }

    return { data: newData };
}