import { useEffect, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const LikeUnlikeButton = ({ recoId }) => {
  const [likes, setLikes] = useState(() => {
    const storedLikes = localStorage.getItem(`likes-${recoId}`);
    return storedLikes !== null ? parseInt(storedLikes, 10) : 0;
  });
  
  const [unlikes, setUnlikes] = useState(() => {
    const storedUnlikes = localStorage.getItem(`unlikes-${recoId}`);
    return storedUnlikes !== null ? parseInt(storedUnlikes, 10) : 0;
  });

  const [liked, setLiked] = useState(() => {
    const storedLiked = localStorage.getItem(`liked-${recoId}`);
    return storedLiked === 'true';
  });
  const [unliked, setUnliked] = useState(() => {
    const storedUnliked = localStorage.getItem(`unliked-${recoId}`);
    return storedUnliked === 'true';
  });

  useEffect(() => {
    localStorage.setItem(`likes-${recoId}`, likes.toString());
    localStorage.setItem(`liked-${recoId}`, liked.toString());
  }, [likes, recoId, liked]);

  useEffect(() => {
    localStorage.setItem(`unlikes-${recoId}`, unlikes.toString());
    localStorage.setItem(`unliked-${recoId}`, unliked.toString());
  }, [unlikes, recoId, unliked]);

  const handleLike = () => {
    if (!liked) {
      setLikes((prevLikes) => prevLikes + 1);
      setLiked(true);
      if (unliked) {
        setUnlikes((prevUnlikes) => prevUnlikes - 1);
        setUnliked(false);
      }
    }
  };

  const handleUnlike = () => {
    if (!unliked) {
      setUnlikes((prevUnlikes) => prevUnlikes + 1);
      setUnliked(true);
      if (liked) {
        setLikes((prevLikes) => prevLikes - 1);
        setLiked(false);
      }
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={handleLike} disabled={liked} className="btn btn-success mr-2"><AiFillLike /></button>
      <span className="text-white">{likes}</span>
      <button onClick={handleUnlike} disabled={unliked} className="btn btn-danger ml-2"><AiFillDislike /></button>
      <span className="text-white">{unlikes}</span>
    </div>
  );
};

export default LikeUnlikeButton;
