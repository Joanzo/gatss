import React from 'react';

interface BackgroundSVGProps {
  className: string;
}

// Just for Example not being used on real implementations
const BackgroundSVG = (props: BackgroundSVGProps) => {
  const { className = '' } = props;

  return (
    <div
      className={className}
      style={{ width: 100, height: 100, margin: 12 }}
    />
  );
};

export default BackgroundSVG;
