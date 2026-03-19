import React from 'react';

type DoodleType = 'star' | 'arrow' | 'heart' | 'line' | 'flower';

interface DoodleProps {
  type: DoodleType;
  className?: string;
}

export default function Doodle({ type, className = '' }: DoodleProps) {
  if (type === 'star') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" fill="currentColor" />
      </svg>
    );
  }
  if (type === 'heart') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 85 C50 85 10 55 10 30 C10 15 25 5 40 15 C50 25 50 25 50 25 C50 25 50 25 60 15 C75 5 90 15 90 30 C90 55 50 85 50 85 Z" fill="currentColor" />
      </svg>
    );
  }
  if (type === 'arrow') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20 Q 50 80 80 80 M 60 60 L 80 80 L 80 60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'line') {
    return (
      <svg className={className} viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10 Q 25 5 50 10 T 95 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'flower') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="10" fill="currentColor" />
        <circle cx="50" cy="20" r="15" fill="currentColor" opacity="0.5" />
        <circle cx="50" cy="80" r="15" fill="currentColor" opacity="0.5" />
        <circle cx="20" cy="50" r="15" fill="currentColor" opacity="0.5" />
        <circle cx="80" cy="50" r="15" fill="currentColor" opacity="0.5" />
      </svg>
    );
  }
  return null;
}
