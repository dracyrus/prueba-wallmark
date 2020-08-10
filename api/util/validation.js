const validator = require('validator');

/**
 * Validate minimum lenght of a Sentence
 * @param sentence
 * @returns {[]}
 */
exports.validateSentence = sentence => {
  const errors = [];

  if(isNaN(sentence) && !validator.isLength(sentence, {min: 3})) errors.push('sentence is required with minimum of 3 letters');

  return errors;
};

/**
 * Validate if a sentence is Palindrome
 * @param sentence
 * @returns {boolean}
 */
exports.isPalindrome = sentence => {
  let re = /[\W_]/g;
  const lowRegStr = sentence.toLowerCase().replace(re, '');
  const reverseStr = lowRegStr.split('').reverse().join('');

  return reverseStr === lowRegStr;
}