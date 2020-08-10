import gql from "graphql-tag";

export const FIND_BY_SENTENCE = gql`
      mutation findBySentence($sentence: String! $page: Int) {
        findBySentence(sentence: $sentence, page: $page) {
          products{
            _id
            brand
            description
            id
            image
            price
          }
          disccountAmount
          numberProducts
        }
      }
`;

