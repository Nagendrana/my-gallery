// ImageCard.jsx
// Job: Receive one image object via props → display it as a card
// This is a CHILD component — no state, just props in, JSX out

function ImageCard({ id, imageUrl, title, description, alt }) {
  // Pad the number: 1 → "01", 2 → "02"
  const cardNumber = String(id).padStart(2, "0");

  return (
    <figure className="image-card">

      {/* IMAGE */}
      <div className="image-card__frame">
        <img
          src={imageUrl}
          alt={alt}
          loading="lazy"
        />
      </div>

      {/* TEXT DETAILS */}
      <figcaption className="image-card__details">
        <span className="image-card__number">No. {cardNumber}</span>
        <h3 className="image-card__title">{title}</h3>
        <p className="image-card__description">{description}</p>
      </figcaption>

    </figure>
  );
}

export default ImageCard;