'use client';

import React from 'react';
import clsx from 'clsx';

type FloatingInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  name?: string;
  isTextarea?: boolean;
  rows?: number;
};

const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  name,
  isTextarea = false,
  rows = 4,
}) => {
  const sharedClasses =
    'peer w-full border-0 border-b-2 border-gray-300 focus:border-[#0E3A27] bg-transparent text-gray-900 placeholder-transparent focus:outline-none transition';

  const labelClasses = clsx(
    'absolute left-0 top-2 text-gray-500 text-sm transition-all',
    {
      'peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400': true,
      'peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0E3A27]': true,
    }
  );

  return (
    <div className="relative w-full mt-6">
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          rows={rows}
          className={sharedClasses + ' resize-none mt-6'}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={sharedClasses + ' pt-6'}
        />
      )}
      <label className={labelClasses}>{label}</label>
    </div>
  );
};

export default FloatingInput;
