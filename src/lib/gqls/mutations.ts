import { gql } from '@apollo/client';

export const CREATE_RESPONSE_MUTATION = gql`
  mutation CreateResponseMutation($createResponseInput: CreateResponse!) {
    createResponse(input: $createResponseInput)
  }
`;
