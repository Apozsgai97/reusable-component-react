type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
  actions?: React.ReactNode;
};

export function Card(props: CardProps) {
  return (
    <>
      <article className="card">
        <img src={props.imageSrc} alt={props.title} className="card__image" />
        <h3 className="card__title">{props.title}</h3>
        <p className="card__description">{props.description}</p>
        <div className="card__actions"></div>
      </article>
    </>
  );
}
