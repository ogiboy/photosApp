import { useState } from "react";

const ImageShow = ({ src, alt }) => {
  const [emojiSize, setEmojiSize] = useState(30);

  const increaseEmojiSize = () => {
    setEmojiSize((p) => p + 10);
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block", margin: "10px" }}
    >
      <img onClick={increaseEmojiSize} src={src} alt={alt} />
      <span className="emoji" style={{ fontSize: emojiSize }}>
        ❤️‍🔥
      </span>
    </div>
  );
};

export default ImageShow;
