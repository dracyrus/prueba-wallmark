const expect = require('chai').expect;
const validation = require('../util/validation');

it('should be a palindrome sentence', function () {
    const sentence = 'abba';

    expect(validation.isPalindrome(sentence)).to.equal(true);
});

it('should not be a palindrome sentence', function () {
    const sentence = 'abbas';

    expect(validation.isPalindrome(sentence)).to.equal(false);
});

it('should be a valid sentence', function () {
    const errors = [];
    const sentence = 1;

    expect(validation.validateSentence(sentence)).to.deep.equal(errors);
});

it('should not be a valid sentence', function () {
    const errors = [];
    const sentence = 'a';

    expect(validation.validateSentence(sentence)).to.not.equal(errors);
});