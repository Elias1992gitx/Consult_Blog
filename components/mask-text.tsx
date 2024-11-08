import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface MaskTextProps {
  phrases: string[];
  tag?: keyof JSX.IntrinsicElements;
}

const MaskText: React.FC<MaskTextProps> = ({ phrases, tag = 'div' }) => {
  const Component = motion[tag as keyof typeof motion] as React.ComponentType<HTMLMotionProps<any>>;
  
  return (
    <Component>
      {phrases.map((phrase, index) => (
        <span key={index}>{phrase}</span>
      ))}
    </Component>
  );
};

export default MaskText; 