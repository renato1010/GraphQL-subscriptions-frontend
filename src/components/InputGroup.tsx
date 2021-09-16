import React, { useState, ChangeEvent } from 'react';
import { ArrowCircleUpIcon } from '@heroicons/react/solid';
import { classNames, nonAcceptedResponses } from 'lib';

const initialState = {
  value: '',
  isValid: false,
};
const InputGroup = (): JSX.Element => {
  const [response, setresponse] = useState<typeof initialState>(initialState);

  const responseHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    const isBlackListed = nonAcceptedResponses(value);
    const isValid = !isBlackListed && value.length > 3 ? true : false;
    setresponse((response) => ({ ...response, value, isValid }));
  };
  return (
    <div className="w-full lg:w-3/4">
      <label htmlFor="email" className="block text-xl font-medium text-gray-700">
        Is a hot dog a sandwich? Why?
      </label>
      <div className="mt-1 flex rounded-md shadow-sm h-14">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <p className="text-xl">🌭</p>
          </div>
          <input
            onChange={responseHandler}
            type="text"
            name="email"
            id="email"
            className="focus:ring-indigo-500 focus:border-indigo-500 block 
            w-full rounded-none rounded-l-md pl-14 sm:text-lg border-gray-300
             placeholder-gray-600 placeholder-opacity-50"
            placeholder="Your response here..."
            value={response.value}
            autoComplete="off"
          />
        </div>
        <button
          disabled={!response.isValid}
          className={classNames(
            response.isValid
              ? 'bg-green-50 hover:bg-green-100 cursor-pointer'
              : 'bg-gray-50 hover:bg-gray-100 opacity-50 cursor-not-allowed',
            `-ml-px relative inline-flex items-center space-x-2 px-4 py-2 
            border border-gray-300 text-sm font-medium rounded-r-md 
            text-gray-700 focus:outline-none focus:ring-1 
            focus:ring-indigo-500 focus:border-indigo-500`
          )}>
          <ArrowCircleUpIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          <span className="text-lg">Send</span>
        </button>
      </div>
    </div>
  );
};

export { InputGroup };
