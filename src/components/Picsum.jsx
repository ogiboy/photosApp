import { useState } from "react";
import ImageShow from "./ImageShow";

export default function Picsum() {
  const [showImages, setShowImages] = useState([]);

  const fetchPhotos = async () => {
    try {
      const req = await fetch("https://picsum.photos/400/400");
      if (!req.ok) throw new Error("Connection Error");
      const data = req;
      setShowImages((p) => [...p, { id: crypto.randomUUID(), url: data.url }]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="controls">
        <button onClick={fetchPhotos}>Get Random Photos</button>
      </div>
      <div className="images">
        {showImages &&
          showImages.map((image) => (
            <ImageShow key={image.id} src={image.url} alt="random image" />
          ))}
      </div>
    </div>
  );
}
