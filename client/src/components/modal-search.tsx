import React, { useState } from "react";
import { Modal, ModalBody, TextInput, HR } from "flowbite-react";
import { SearchIcon, X } from "lucide-react";
import { modalTheme, textInputTheme } from "@/custom-theme";
import RowNews from "@/components/row-news";

function ModalSearch({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}) {
  const [search, setSearch] = useState<string>("");

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
          onSubmit={(e) => {
            e.preventDefault();
            console.log(search);
          }}
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
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <div
              onClick={() => setSearch("")}
              className="cursor-pointer absolute h-full inset-y-0 right-0"
            >
              <X className="h-full mr-2 text-black" />
            </div>
          )}
        </form>
      </div>
      <ModalBody>{/* <RowNews news={news} /> */}</ModalBody>
    </Modal>
  );
}

export default ModalSearch;
