import React, { useEffect, useState } from "react";

const Rating = ({ initialRating, onRate }) => {
  // State to store the current rating (default is 0 if no initial rating is provided)
  const [rating, setRating] = useState(initialRating || 0);

  // Function to handle rating selection
  const handleRating = (value) => {
    setRating(value); // Update the rating state
    if (onRate) onRate(value); // Call the onRate callback function if provided
  };

  // Effect to update rating state when initialRating prop changes
  useEffect(() => {
    if (initialRating) {
      setRating(initialRating);
    }
  }, [initialRating]);

  return (
    <div>
      {/* Generate 5 stars dynamically using Array.from */}
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1; // Star values range from 1 to 5
        return (
          <span
            key={index}
            className={`text-xl sm:text-2xl cursor-pointer transition-colors ${
              starValue <= rating ? "text-yellow-500" : "text-gray-400"
            }`} // Highlight stars based on the selected rating
            onClick={() => handleRating(starValue)} // Handle star click event
          >
            &#9733; {/* Unicode character for a star */}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
