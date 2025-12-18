import { useState } from "react";
export default function LikedButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setclicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setclicks(clicks + 1);
  };

  let likedStyle = { color: "red" };
  return (
    <div>
      <p>Total_ Clicks = {clicks}</p>
      <p onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likedStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
