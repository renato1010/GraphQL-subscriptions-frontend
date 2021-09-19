import { gql } from '@apollo/client';

export const GET_ALL_RESPONSES_QUERY = gql`
  query GetAllResponses {
    allResponses {
      response
      createdAt
    }
  }
`;
