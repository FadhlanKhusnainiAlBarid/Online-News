"use client";
import { useEffect, useState, Suspense } from "react";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { fetchNews } from "@/lib/features/action/newsAction";
import RowNews from "@/components/row-news";
import { Button } from "flowbite-react";
import { usePathname } from "next/navigation";
import LoadingNews from "@/app/[pages]/loading-news";

export default function PageComponent({ params }: { params: string }) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const { news } = useAppSelector((state) => state.news);
  const [showPerRow, setShowPerRow] = useState(5);

  useEffect(() => {
    if (news.section !== params) {
      dispatch(fetchNews(params));
    }
  }, [dispatch, params, news, pathname]);

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
      <div className="my-2 flex flex-col items-center space-y-3 md:space-y-4 p-2 bg-white rounded-lg">
        <Suspense fallback={<LoadingNews />}>
          {news.results.length === 0 ? (
            <h1 className="text-lg lg:text-2xl font-semibold leading-4 text-gray-500">
              No news found
            </h1>
          ) : (
            news.results
              .filter((_, index) => index < showPerRow)
              .map((news, i) => <RowNews key={i} news={news} />)
          )}
        </Suspense>
        {showPerRow < news.results.length && (
          <Button
            color="light"
            className="cursor-pointer"
            onClick={() => setShowPerRow(showPerRow + 5)}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
}
