import React, { useEffect, useState } from "react";
import { Modal, ModalBody, TextInput, Pagination } from "flowbite-react";
import { SearchIcon, X } from "lucide-react";
import { modalTheme, textInputTheme } from "@/custom-theme";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import RowNews from "@/components/row-news";
import { fetchSearchNews, TextSearch } from "@/lib/features/action/newsAction";
import { setSearchNews } from "@/lib/features/counter/newsSlice";

function ModalSearch({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}) {
  const dispatch = useAppDispatch();
  const { search, searchNews } = useAppSelector((state) => state.news);
  const [page, setPage] = useState<number>(1);
  const [prevSearch, setprevSearch] = useState<string>("");
  const onPageChange = (page: number) => setPage(page);
  useEffect(() => {
    const sub = setTimeout(() => {
      if (search.length > 2 && search === prevSearch) {
        dispatch(fetchSearchNews(search, page - 1));
      } else if (search.length > 2 && search !== prevSearch) {
        setPage(1);
        setprevSearch(search);
        dispatch(fetchSearchNews(search, 0));
      } else if (search.length === 0) {
        setPage(1);
        dispatch(setSearchNews([]));
      }
    }, 1250);
    return () => clearTimeout(sub);
  }, [search, page, dispatch]);

  useEffect(() => {
    console.log(searchNews);
  }, [searchNews]);
  return (
    <Modal
      dismissible
      theme={modalTheme}
      size="2xl"
      position="top-center"
      show={openModal}
      onClose={() => setOpenModal(false)}
    >
      <div className="flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative w-full h-fit"
        >
          <TextInput
            theme={textInputTheme}
            icon={SearchIcon}
            color=""
            type="text"
            placeholder="Search"
            className="w-full max-w-full h-fit"
            value={search}
            onChange={(e) => dispatch(TextSearch(e.target.value))}
          />
          {search && (
            <div
              onClick={() => dispatch(TextSearch(""))}
              className="cursor-pointer absolute h-full inset-y-0 right-0"
            >
              <X className="h-full mr-2 text-black" />
            </div>
          )}
        </form>
      </div>
      <ModalBody>
        {searchNews.docs?.length > 0 && (
          <>
            {searchNews.docs?.map((news: any) => (
              <RowNews
                key={news.web_uri}
                url={news.web_url}
                title={news.headline.main}
                abstract={news.abstract}
                imageUrl={news.multimedia.default.url}
                caption={news.multimedia.caption}
                published_date={news.pub_date}
              />
            ))}
          </>
        )}
        {searchNews.meta?.hits && (
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              currentPage={page}
              totalPages={
                searchNews.meta?.hits
                  ? Math.floor(searchNews.meta?.hits / 10) > 100
                    ? 101
                    : Math.floor(searchNews.meta?.hits / 10)
                  : 101
              }
              onPageChange={onPageChange}
            />
          </div>
        )}
      </ModalBody>
    </Modal>
  );
}

export default ModalSearch;
