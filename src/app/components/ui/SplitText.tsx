import React from "react";

export function formatTextWithBreaks(text: string): React.ReactNode[] {
  return text.split('\n').map((line, index, arr) => (
    <React.Fragment key={index}>
      {line}
      {index < arr.length - 1 && <br />}
    </React.Fragment>
  ));
}

export function splitBold(text: string): React.ReactNode{

  const [beforeDash, afterDash] = text.split('-', 2);

  return (
    <>
      <strong className="text-primary">{beforeDash}</strong>{afterDash ? ` - ${afterDash}` : ''}
    </>
  );
}
