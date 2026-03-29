import { Fragment } from "react";
import { galleryImages } from "./data/images";
import GalleryGrid from "./components/GalleryGrid";
import "./App.css";

function App() {
  return (
    <Fragment>

      <header className="site-header">
        <h1 className="site-header__title">My Gallery</h1>
        <p className="site-header__subtitle">
          {galleryImages.length} Photos
        </p>
      </header>

      <main className="gallery-section">
        <div className="gallery-grid">
          <GalleryGrid images={galleryImages} />
        </div>
      </main>

      <footer className="site-footer">
        <p>Built with React ⚛️</p>
      </footer>

    </Fragment>
  );
}

export default App;