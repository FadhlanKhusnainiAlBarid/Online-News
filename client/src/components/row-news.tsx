import React from "react";
import { HR } from "flowbite-react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Image from "next/image";
import NotFoundImage from "../../public/no-image-found.png";

TimeAgo.addLocale(en);

function RowNews({
  url,
  title,
  abstract,
  imageUrl,
  caption,
  published_date,
}: {
  url: string;
  title: string;
  abstract: string;
  imageUrl: string;
  caption: string;
  published_date: string;
}) {
  const timeAgo = new TimeAgo("en-US");
  return (
    <a
      href={url}
      target="_blank"
      className="w-full cursor-pointer group space-y-px"
    >
      <p className="text-xs line-clamp-1 text-gray-600">{title}</p>
      <div className="flex justify-between gap-2">
        <h2 className="h-fit group-hover:underline group-hover:underline-offset-1 text-base lg:text-lg text-black leading-6">
          {abstract}
        </h2>
        <Image
          className="w-24 h-24 rounded-lg"
          src={imageUrl ? imageUrl : NotFoundImage}
          alt={caption ? caption : "no-image-found"}
          width={100}
          height={100}
        />
      </div>
      <span className="text-xs text-gray-600">
        {timeAgo.format(Date.parse(published_date))}
      </span>
      <HR className="mt-2.5 mb-2 py-px rounded dark:bg-gray-500" />
    </a>
  );
}

export default RowNews;
