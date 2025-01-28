import React, { useState } from "react";
import gallery from "../../data/gallery";

const Gallery = () => {
  const [file, setFile] = useState(null);
  return (
    <div className="galleryContainer">
      <h1 className="text-5xl font-bold text-centermb-6 text-center mb-10">
       Our Gallery
      </h1>
      <div className="media-container">
        {gallery.map((file) => (
          <div className="media" key={file.id} onClick={() => setFile(file)}>
            <img
              src={file.url}
              alt={`Gallery Image ${file.id}`}
              className="media-image"
            />
          </div>
        ))}
      </div>

      <div className="popup-media" style={{ display: file ? "block" : "none" }}>
        <span onClick={() => setFile(null)}>&times;</span>
        {file && <img src={file.url} alt={`Gallery Image ${file.id}`} />}
      </div>
    </div>
  );
};

export default Gallery;
