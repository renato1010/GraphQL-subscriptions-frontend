import React from 'react';
import { Response } from 'lib';

// const responses: Response[] = [
//   {
//     response: 'Leslie Alexandera',
//     createdAt: '2021-09-18T22:44:11.395Z',
//   },
//   {
//     response: 'Leslie Alexandera',
//     createdAt: '2021-09-18T22:44:11.395Z',
//   },
//   {
//     response: 'Leslie Alexandera',
//     createdAt: '2021-09-18T22:44:11.395Z',
//   },
//   {
//     response: 'Leslie Alexandera',
//     createdAt: '2021-09-18T22:44:11.395Z',
//   },
//   {
//     response: 'Leslie Alexandera',
//     createdAt: '2021-09-18T22:44:11.395Z',
//   },
// ];

type GridListProps = {
  responseList: Response[];
};
const GridList = ({ responseList }: GridListProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-3 xl:gap-4">
      {responseList.map(({ response, createdAt }, i) => (
        <div
          key={`${response}-${i}`}
          className="relative rounded-lg border border-gray-300 bg-white px-6 
          py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 mb-3
          focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
          <div className="flex-1 min-w-0">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{response}</p>
              <p className="text-xs text-gray-400 truncate">{createdAt}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export { GridList };
