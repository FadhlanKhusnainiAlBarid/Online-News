import React from "react";
import { HR } from "flowbite-react";

function RowNews({ news }: { news: any }) {
  return (
    <a
      href={news.url}
      target="_blank"
      className="w-full cursor-pointer group space-y-px"
    >
      <p className="text-xs line-clamp-1 text-gray-600">{news.title}</p>
      <div className="flex justify-between gap-2">
        <h2 className="h-fit group-hover:underline group-hover:underline-offset-1 text-base lg:text-lg text-black leading-6">
          {news.abstract}
        </h2>
        <img
          className="w-24 h-24 rounded-lg"
          src={news.multimedia[2]?.url}
          alt={news.multimedia[2]?.caption}
        />
      </div>
      <span className="text-xs text-gray-600">12 min ago</span>
      <HR className="mt-2.5 mb-2 py-px rounded dark:bg-gray-500" />
    </a>
  );
}

export default RowNews;
