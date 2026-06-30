type ReaderToolbarProps = {
  title: string;
  onHome: () => void;
  onFullscreen: () => void;
};

export function ReaderToolbar({ title, onHome, onFullscreen }: ReaderToolbarProps) {
  return (
    <header className="readerToolbar bb-glass">
      <div className="readerToolbar__brand">
        <strong>BloomBook</strong>
        <span>{title}</span>
      </div>

      <nav className="readerToolbar__actions" aria-label="כלי קריאה">
        <button onClick={onHome} title="בית">🏠</button>
        <button title="תוכן עניינים">📑</button>
        <button title="חיפוש">🔍</button>
        <button onClick={onFullscreen} title="מסך מלא">⛶</button>
      </nav>
    </header>
  );
}
