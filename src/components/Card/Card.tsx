type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
  actions?: React.ReactNode;
};

export function Card(props: CardProps) {
  return (
    <>
      <article className="card bg-base-100 w-96 shadow-xl m-4">
        <figure>
          <img src={props.imageSrc} alt={props.title} className="card__image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          {props.actions && (
            <div className="card-actions justify-end">{props.actions}</div>
          )}
        </div>
      </article>
    </>
  );
}
