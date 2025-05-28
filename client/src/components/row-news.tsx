import React from "react";
import { HR } from "flowbite-react";

function RowNews() {
  return (
    <div className="p-2 bg-white rounded-lg">
      <div className="cursor-pointer group space-y-px">
        <p className="text-xs line-clamp-1 text-gray-600">
          China’s Soft Spot in Trade War With Trump: Risk of Huge Job Loss
        </p>
        <div className="flex justify-between gap-2">
          <h2 className="group-hover:underline group-hover:underline-offset-1 text-base lg:text-lg text-black leading-6">
            Prime Minister Benjamin Netanyahu, wary of a diplomatic solution to
            curbing Iran’s nuclear program, continues to press for military
            action that would upend President Trump’s push for a negotiated
            deal.
          </h2>
          <img
            className="w-24 h-24 rounded-lg"
            src="https://static01.nyt.com/images/2025/05/27/multimedia/27Biz-China-Jobs-video-cover-vbmk/27Biz-China-Jobs-video-cover-vbmk-thumbLarge.jpg"
            alt=""
          />
        </div>
        <span className="text-xs text-gray-600">12 min ago</span>
        <HR className="mt-2.5 mb-2 py-px rounded dark:bg-gray-500" />
      </div>
    </div>
  );
}

export default RowNews;
