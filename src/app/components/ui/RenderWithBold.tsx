import React from 'react';

export function renderWithBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g); // split on **...**
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
}
