import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const baseClasses = 'px-4 py-2 rounded font-semibold';
  const variantClasses = variant === 'primary' ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-500 text-white hover:bg-gray-700';

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
