import React from "react";
import { HR } from "flowbite-react";

function LoadingNews() {
  return (
    <div className="w-full cursor-pointer group space-y-px animate-pulse">
      <div className="h-3.5 w-24 rounded-lg bg-gray-600"></div>
      <div className="flex justify-between gap-2">
        <div className="h-fit w-full space-y-1">
          <div className="grid grid-cols-5 gap-4 *:h-5.5 *:bg-black">
            <div className="col-span-2"></div>
            <div className="col-span-3"></div>
          </div>
          <div className="h-5.5 w-24 bg-black"></div>
        </div>
        <div className="w-24 h-24 rounded-lg bg-gray-600"></div>
      </div>
      <div className="h-2 w-12 bg-gray-600"></div>
      <HR className="mt-2.5 mb-2 py-px rounded dark:bg-gray-500" />
    </div>
  );
}

export default LoadingNews;
