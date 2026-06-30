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

export function BookReader({ pages, currentPage, onNext, onPrev, onGoTo }: BookReaderProps) {
  const page = pages[currentPage];

  return (
    <main className="readerShell">
      <button className="readerArrow readerArrow--prev" onClick={onPrev} disabled={currentPage === 0}>‹</button>

      <article className={`readerPage ${page.edgeToEdge ? "readerPage--edge" : ""}`}>
        <img src={page.src} alt={page.title} />
      </article>

      <button className="readerArrow readerArrow--next" onClick={onNext} disabled={currentPage === pages.length - 1}>›</button>

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
