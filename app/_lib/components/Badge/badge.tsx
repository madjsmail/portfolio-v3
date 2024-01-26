import React from 'react';
import './badge.css'


interface BadgeProps {
  children: React.ReactNode;
  type: 'ic-terine' | 'cerise' | 'orange-peel'|'baby-powder'; // Add more types if needed
}
const colorClasses = {
  'ic-terine': 'badge badge-container ic-terine',
  'cerise': 'badge badge-container cerise',
  'orange-peel': 'badge badge-container orange-peel',
};

const parseColor = (colorVariable :any) => {
  const [hue, saturation, lightness] = colorVariable.split(',').map((value: string) => parseInt(value.trim()));
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
const Badge: React.FC<BadgeProps> = ({ children, type = 'cerise' }) => {
  const classNames = {
    'ic-terine': 'badge badge-container ic-terine ',
    'cerise': 'badge badge-container cerise',
    'orange-peel': 'badge badge-container orange-peel',
    'baby-powder': 'badge badge-container baby-powder',
  };
  const alphaValue = 0.1;

  return (
    <div className={classNames[type]} style={{ backgroundColor: `hsla(var(--cl--${type}), ${alphaValue})`, color: `hsl(var(--cl--${type}))`, boxShadow: `0px 1px 4px 1px hsla(var(--cl--${type}), ${alphaValue}) inset` }}>
      {children}
    </div>
  );
};

export default Badge;

