import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  disabled = false,
  type = 'button',
  className = '',
  ...props 
}) => {
  const buttonClasses = [
    'button',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
