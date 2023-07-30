import React, { useState, useEffect } from "react";
import "./Like.css";

function Like() {
    
  const [likeCount, setLikeCount] = useState(() => {
    const storedLikeCount = localStorage.getItem("likeCount");
    return storedLikeCount ? parseInt(storedLikeCount) : 0;
  });

  const [dislikeCount, setDislikeCount] = useState(() => {
    const storedDislikeCount = localStorage.getItem("dislikeCount");
    return storedDislikeCount ? parseInt(storedDislikeCount) : 0;
  });

  const initialActiveBtn = likeCount > dislikeCount ? "like" : dislikeCount > likeCount ? "dislike" : "none";
  const [activeBtn, setActiveBtn] = useState(initialActiveBtn);

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount((prevCount) => prevCount + 1);
      setActiveBtn("like");
    } else if (activeBtn === "like") {
      setLikeCount((prevCount) => prevCount - 1);
      setActiveBtn("none");
    } else if (activeBtn === "dislike") {
      setLikeCount((prevCount) => prevCount + 1);
      setDislikeCount((prevCount) => prevCount - 1);
      setActiveBtn("like");
    }
  };

  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount((prevCount) => prevCount + 1);
      setActiveBtn("dislike");
    } else if (activeBtn === "dislike") {
      setDislikeCount((prevCount) => prevCount - 1);
      setActiveBtn("none");
    } else if (activeBtn === "like") {
      setDislikeCount((prevCount) => prevCount + 1);
      setLikeCount((prevCount) => prevCount - 1);
      setActiveBtn("dislike");
    }
  };

  useEffect(() => {
    localStorage.setItem("likeCount", likeCount.toString());
    localStorage.setItem("dislikeCount", dislikeCount.toString());
    localStorage.setItem("activeBtn", activeBtn);
  }, [likeCount, dislikeCount, activeBtn]);

  return (
    <div className="btn-container">
      <input
        type="button"
        className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
        value={`Like ${likeCount}`}
        onClick={handleLikeClick}
      />

      <input
        type="button"
        className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
        value={`Dislike ${dislikeCount}`}
        onClick={handleDisikeClick}
      />
    </div>
  );
}

export default Like;
