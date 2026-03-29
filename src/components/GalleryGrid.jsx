// GalleryGrid.jsx
// Job: Receive full images array → loop through → render one ImageCard per item
// Uses React Fragment — no extra div wrapper in DOM!

import { Fragment } from "react";
import ImageCard from "./ImageCard";

function GalleryGrid({ images }) {
  return (
    <Fragment>
      {images.map((item) => (
        <ImageCard
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          alt={item.alt}
        />
      ))}
    </Fragment>
  );
}

export default GalleryGrid;