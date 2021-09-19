import { gql } from '@apollo/client';

export const NEW_RESPONSE_SUBSCRIPTION = gql`
  subscription NewResponse {
    newResponseAdded {
      response
      createdAt
    }
  }
`;
