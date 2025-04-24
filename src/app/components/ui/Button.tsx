'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({ label, variant = 'primary', ...props }: ButtonProps) {
  const baseClasses = `px-10 py-4 rounded-xl text-[20px] font-semibold transition-all hover:cursor-pointer duration-300 active:scale-95`;

  const variants = {
    primary: `bg-orange text-white hover:bg-[var(--color-orange-hover)] `,
    secondary: ` text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary-light)]`,
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} `}
      {...props}
    >
      {label}
    </button>
  );
}
