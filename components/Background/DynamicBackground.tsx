type DynamicBackgroundProps = {
  image: string;
  alt?: string;
};

export function DynamicBackground({ image, alt = "" }: DynamicBackgroundProps) {
  return (
    <div className="dynamicBackground" aria-hidden="true">
      <img src={image} alt={alt} />
      <div className="dynamicBackground__shade" />
      <div className="dynamicBackground__light" />
    </div>
  );
}
