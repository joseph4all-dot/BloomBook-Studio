"use client";

import { useMemo, useState } from "react";
import { getBook } from "@/lib/book";
import { DynamicBackground } from "@/components/Background/DynamicBackground";
import { CinematicCover } from "@/components/Cover/CinematicCover";
import { BookReader } from "@/components/Reader/BookReader";
import { ReaderToolbar } from "@/components/Toolbar/ReaderToolbar";

import "@/components/Background/DynamicBackground.css";
import "@/components/Cover/CinematicCover.css";
import "@/components/Reader/BookReader.css";
import "@/components/Toolbar/ReaderToolbar.css";

export default function HomePage() {
  const book = useMemo(() => getBook(), []);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const backgroundImage = isOpen ? book.pages[currentPage].src : book.cover;

  function nextPage() {
    setCurrentPage((page) => Math.min(book.pages.length - 1, page + 1));
  }

  function prevPage() {
    setCurrentPage((page) => Math.max(0, page - 1));
  }

  function fullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  return (
    <>
      <DynamicBackground image={backgroundImage} />

      {!isOpen ? (
        <CinematicCover
          title={book.title}
          subtitle={book.subtitle}
          cover={book.cover}
          onOpen={() => setIsOpen(true)}
        />
      ) : (
        <>
          <ReaderToolbar
            title={book.title}
            onHome={() => setIsOpen(false)}
            onFullscreen={fullscreen}
          />
          <BookReader
            pages={book.pages}
            currentPage={currentPage}
            onNext={nextPage}
            onPrev={prevPage}
            onGoTo={setCurrentPage}
          />
        </>
      )}
    </>
  );
}
