import { useState } from "react";
import ImageShow from "./ImageShow";

export default function Ataturk({ style }) {
  const [showImages, setShowImages] = useState([]);

  const fetchPhotos = async () => {
    try {
      const randomNumber = Math.floor(Math.random() * 80);
      const req = await fetch(
        "https://raw.githubusercontent.com/ogiboy/ataturk-photos/main/db.json"
      );
      if (!req.ok) throw new Error("Connection Error");
      const res = await req.json();
      const data = res;
      setShowImages((p) => [...p, data[randomNumber]]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App" style={style}>
      <div className="controls">
        <button onClick={fetchPhotos}>Get Atatürk Photos</button>
      </div>
      <div className="images">
        {showImages &&
          showImages.map((image) => (
            <ImageShow key={image.id} src={image.image} alt="random image" />
          ))}
      </div>
    </div>
  );
}
