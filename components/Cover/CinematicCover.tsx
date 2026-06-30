type CinematicCoverProps = {
  title: string;
  subtitle: string;
  cover: string;
  onOpen: () => void;
};

export function CinematicCover({ title, subtitle, cover, onOpen }: CinematicCoverProps) {
  return (
    <section className="openingScreen">
      <div className="openingScreen__book" aria-label={title}>
        <div className="openingScreen__bookSpine" />
        <img src={cover} alt={title} />
      </div>

      <div className="openingScreen__copy">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="bb-button" onClick={onOpen}>📖 פתח את הספר</button>
      </div>
    </section>
  );
}
