"use client";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchNews } from "@/lib/features/action/newsAction";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { news } = useAppSelector((state) => state.news);

  useEffect(() => {
    if (pathname === "/") {
      router.push("/home");
    }
  }, [pathname, router]);

  useEffect(() => {
    if (!news.section) {
      dispatch(fetchNews("home"));
    }
  }, [dispatch, news.section]);

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
    </div>
  );
}
