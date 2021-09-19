import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_RESPONSES_QUERY, NEW_RESPONSE_SUBSCRIPTION } from 'lib';
import { GridList } from './GridList';
import { LoaderIcon } from 'components';

const ResponseList = (): JSX.Element => {
  const { data, loading, subscribeToMore } = useQuery(GET_ALL_RESPONSES_QUERY);

  useEffect(() => {
    subscribeToMore({
      document: NEW_RESPONSE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!(subscriptionData?.data ?? undefined)) {
          return prev;
        }
        const newResponse = subscriptionData.data['newResponseAdded'];
        return { allResponses: [...prev['allResponses'], newResponse] };
      },
    });
  }, []);
  const icon = (
    <div className="w-full h-14 flex justify-center items-center">
      <div className="w-10 h-10">
        <LoaderIcon />
      </div>
    </div>
  );
  console.log({ data });
  return (
    <section className="container mx-auto h-full flex flex-col justify-center items-stretch px-3">
      <h2 className="font-bold text-xl text-center my-8">Response List</h2>
      {loading ? icon : <GridList responseList={data.allResponses} />}
    </section>
  );
};

export { ResponseList };
