import React, { useState } from 'react';

function DescriptionWithButton({ description }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const maxLines = 3; // Number of lines to display before truncating

  const truncatedDescription = showFullDescription
    ? description
    : description
        .split('\n')
        .slice(0, maxLines)
        .join('\n');

  const shouldShowButton = description.split('\n').length > maxLines;

  return (
    <div>
      <p className="text-white">{truncatedDescription}</p>
      {shouldShowButton && (
        <button onClick={toggleDescription} className="btn-learn-more">
          {showFullDescription ? 'Show less' : 'Learn more'}
        </button>
      )}
    </div>
  );
}

export default DescriptionWithButton;