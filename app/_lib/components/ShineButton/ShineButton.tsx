import React from 'react';
import './ShineButton.css';


interface ButtonProps {
  variant?: 'hover' | 'animated' | 'alt';
  children: React.ReactNode;
  onClick?: () => void;
}

const ShineButton: React.FC<ButtonProps> = ({ variant = 'alt', children, onClick }) => {
  const classNames = {
    hover: 'btn btn-hover',
    animated: 'btn btn-anim',
    alt: 'btn-alt',
  }[variant];

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};
export default ShineButton;