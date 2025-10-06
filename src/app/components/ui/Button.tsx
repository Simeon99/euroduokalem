'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'contact';
  isLoading?: boolean;
}

export default function Button({
  label,
  variant = 'primary',
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    `px-10 max-xsw:px-4  py-4 rounded-xl text-[20px] font-semibold transition-all duration-300 ${disabled ? '': 'active:scale-95'} `;

  const variants = {
    primary: `bg-orange text-white ${disabled ? '': 'hover:bg-[var(--color-orange-hover)]'}`,
    secondary: `text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary-light)]`,
    contact: `bg-gray-100 text-[var(--color-primary)] 
            hover:bg-gray-200 
            text-[var(--color-primary)]
            border border-gray-300 
            shadow-sm`,
  };

  const disabledClasses = `opacity-50 cursor-not-allowed  ${disabled ? '' : 'hover:scale-100 hover:bg-inherit'} `;

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${disabled ? disabledClasses : 'hover:cursor-pointer'}`}
      disabled={disabled}
      {...props}
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        {label}
        {isLoading && (
          <div className="flex items-center justify-center">
            <div className="w-7 h-7 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </button>
  );
}
