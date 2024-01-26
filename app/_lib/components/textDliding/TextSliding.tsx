import React from 'react';
import './TextSliding.css'; // You can create a CSS file for styling

interface TextSlidingProps {
  mainText: string;
  sliderWords: string[];
}

const TextSliding: React.FC<TextSlidingProps> = ({ mainText, sliderWords }) => {
  return (
    <h1 className='text-sliding'>
      {mainText}
      <span className="slider">
        {sliderWords.map((word, index) => (
          <span key={index} className="slider__word">
            {word}
          </span>
        ))}
      </span>
    </h1>
  );
};

export default TextSliding;