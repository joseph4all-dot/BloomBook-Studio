"use client";

import { useEffect, useState } from "react";

type BookPage = {
  id: string;
  title: string;
  src: string;
  edgeToEdge: boolean;
};

type BookReaderProps = {
  pages: BookPage[];
  currentPage: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (page: number) => void;
};

export function BookReader({
  pages,
  currentPage,
  onNext,
  onPrev,
  onGoTo,
}: BookReaderProps) {
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const page = pages[currentPage];

  function turnNext() {
    if (currentPage >= pages.length - 1) return;
    setDirection("next");
    setTimeout(() => {
      onNext();
      setDirection(null);
    }, 260);
  }

  function turnPrev() {
    if (currentPage <= 0) return;
    setDirection("prev");
    setTimeout(() => {
      onPrev();
      setDirection(null);
    }, 260);
  }

  useEffect(() => {
  function handleKey(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      turnNext();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      turnPrev();
    }
  }

  window.addEventListener("keydown", handleKey);

  return () => {
    window.removeEventListener("keydown", handleKey);
  };
}, [currentPage, pages.length]);
  return (
    <main className="readerShell">
      <button
        className="readerArrow readerArrow--prev"
        onClick={turnPrev}
        disabled={currentPage === 0}
      >
        ›
      </button>

      <section className="bookStage">
        <article
          className={[
            "readerPage",
            page.edgeToEdge ? "readerPage--edge" : "",
            direction === "next" ? "readerPage--turnNext" : "",
            direction === "prev" ? "readerPage--turnPrev" : "",
          ].join(" ")}
        >
          <div className="readerPage__backfill" aria-hidden="true">
  <img src={page.src} alt="" />
</div>

<img className="readerPage__image" src={page.src} alt={page.title} />
        </article>
      </section>

      <button
        className="readerArrow readerArrow--next"
        onClick={turnNext}
        disabled={currentPage === pages.length - 1}
      >
        ‹
      </button>

      <nav className="readerDots" aria-label="עמודים">
        {pages.map((item, index) => (
          <button
            key={item.id}
            aria-label={item.title}
            className={index === currentPage ? "isActive" : ""}
            onClick={() => onGoTo(index)}
          />
        ))}
      </nav>
    </main>
  );
}