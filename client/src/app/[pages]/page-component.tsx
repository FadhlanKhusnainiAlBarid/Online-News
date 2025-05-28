"use client";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { fetchNews } from "@/lib/features/action/newsAction";
import RowNews from "@/components/row-news";

export default function PageComponent({ params }: { params: string }) {
  const dispatch = useAppDispatch();
  const { news } = useAppSelector((state) => state.news);

  useEffect(() => {
    if (news.section !== params) {
      dispatch(fetchNews(params));
    }
  }, [dispatch, params, news]);

  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <div className="container max-w-7xl mx-auto px-5 py-2 space-y-3 md:space-y-4">
      <div>
        <h1 className="text-lg lg:text-2xl font-semibold leading-4 text-black">
          Your briefing
        </h1>
        <span className="text-xs lg:text-sm text-gray-500">
          Tuesday, 27 May
        </span>
      </div>
      <div>
        <RowNews />
      </div>
    </div>
  );
}
