const fs = require('fs')
const path = require('path')
const { expect } = require('chai')
const EasyGraphQLTester = require('easygraphql-tester')

const schemaCode = fs.readFileSync(path.join(__dirname, 'schema', 'schema.gql'), 'utf8');

const mutation = `
    mutation findBySentence($sentence: String! $page: Int) {
        findBySentence(sentence: $sentence, page: $page) {
          numberProducts
        }
      }`;

describe('Test Mutation findBySentence', () => {
    let tester = new EasyGraphQLTester(schemaCode);

    it('Should throw an error if the sentence are missing', async () => {
        let error
        try {
            await tester.mock(mutation)
        } catch (err) {
            error = err
        }

        expect(error).to.be.an.instanceOf(Error);
    });

    it('Should pass if the mutation is valid', () => {
        tester.test(true, mutation, {
            sentence: 'abba',
        });
    });

    it('Should not pass if one value on the mutation input is invalid', () => {
        tester.test(false, mutation, {
            sentence: true,
        })
    });
})