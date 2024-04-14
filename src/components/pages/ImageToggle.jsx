import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function ImageToggle() {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const toggleImage = () => {
    setShowFirstImage(!showFirstImage);
  };

  return (
    <div className="pics d-flex flex-column align-items-center ms-3">
      {showFirstImage ? (
        <img src="./img/pixil-frame-0.png" alt="pixel art of developer" className="mb-3" />
      ) : (
        <img src="./img/unnamed.jpg" alt="developer's pic" className="mb-3" />
      )}
      <div className="d-flex">
        <button onClick={toggleImage} className="btn btn-link">
          <FaArrowLeft className="arrow-icon" />
        </button>
        <button onClick={toggleImage} className="btn btn-link">
          <FaArrowRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
}

export default ImageToggle;
