import React, { useState, ChangeEvent } from 'react';
import { InputGroup } from './InputGroup';
import { useMutation } from '@apollo/client';
import {
  nonAcceptedResponses,
  CREATE_RESPONSE_MUTATION,
  CreateResponse_Response,
  CreateResponse_Variables,
} from 'lib';
import { Notification } from 'components';

const initialState = {
  value: '',
  isValid: false,
};
const initialExtraProps = {
  title: '',
  subtitle: '',
  hasError: false,
};
const EnterResponses = (): JSX.Element => {
  const [response, setresponse] = useState<typeof initialState>(initialState);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationExtraProps, setNotificationExtraProps] = useState(initialExtraProps);
  const [createResponse] = useMutation<CreateResponse_Response, CreateResponse_Variables>(
    CREATE_RESPONSE_MUTATION,
    {
      variables: { createResponseInput: { response: response.value } },
    }
  );

  const responseHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    const isBlackListed = nonAcceptedResponses(value);
    const isValid = !isBlackListed && value.length > 3 ? true : false;
    setresponse((response) => ({ ...response, value, isValid }));
  };
  const setNotificationVis = (set: boolean) => setShowNotification(set);

  const onSubmitResponse = async () => {
    const { data, errors } = await createResponse();
    if (!errors) {
      // show success notification
      setNotificationExtraProps({
        title: 'Successfully saved!',
        subtitle: `New response with Id:${data?.createResponse ?? '❌'}`,
        hasError: false,
      });
      setresponse(initialState);
    } else {
      // show error notification
      setNotificationExtraProps({
        title: 'Error',
        subtitle: "Couldn't save your response",
        hasError: true,
      });
    }
    setShowNotification(true);
  };

  return (
    <section className="container mx-auto h-full flex justify-center mt-32">
      <Notification
        {...notificationExtraProps}
        show={showNotification}
        setNotificationVis={setNotificationVis}
      />
      <InputGroup {...{ response, responseHandler, onSubmitResponse }} />
    </section>
  );
};

export { EnterResponses };
