import React from 'react';

type DoodleType = 'star' | 'arrow' | 'heart' | 'line' | 'flower' | 'calla-lily' | 'orchid' | 'tulip' | 'baby-breath';

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
  if (type === 'calla-lily') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 95 C50 95 45 70 45 50 C45 30 60 10 80 5 C60 5 40 20 35 45 C30 70 50 95 50 95 Z" fill="currentColor" />
        <path d="M50 95 C50 95 55 70 55 50 C55 30 40 10 20 5 C40 5 60 20 65 45 C70 70 50 95 50 95 Z" fill="currentColor" opacity="0.8" />
        <path d="M50 60 L50 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    );
  }
  if (type === 'orchid') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="8" fill="currentColor" />
        <path d="M50 42 Q70 10 90 42 T50 58 Q30 10 10 42 T50 42" fill="currentColor" opacity="0.4" />
        <path d="M42 50 Q10 70 42 90 T58 50 Q90 70 58 90 T42 50" fill="currentColor" opacity="0.6" />
        <path d="M50 58 Q70 90 90 58 T50 42 Q30 90 10 58 T50 58" fill="currentColor" opacity="0.8" />
      </svg>
    );
  }
  if (type === 'tulip') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 90 V40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 50 C30 30 45 20 50 40 C55 20 70 30 70 50 C70 70 50 80 50 80 C50 80 30 70 30 50 Z" fill="currentColor" />
        <path d="M50 80 C50 80 40 60 50 40 C60 60 50 80 50 80 Z" fill="currentColor" opacity="0.7" />
      </svg>
    );
  }
  if (type === 'baby-breath') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="30" r="3" fill="currentColor" />
        <circle cx="40" cy="20" r="2" fill="currentColor" />
        <circle cx="60" cy="25" r="3" fill="currentColor" />
        <circle cx="80" cy="35" r="2" fill="currentColor" />
        <circle cx="30" cy="50" r="3" fill="currentColor" />
        <circle cx="55" cy="45" r="2" fill="currentColor" />
        <circle cx="75" cy="60" r="3" fill="currentColor" />
        <circle cx="15" cy="70" r="2" fill="currentColor" />
        <circle cx="45" cy="75" r="3" fill="currentColor" />
        <circle cx="65" cy="80" r="2" fill="currentColor" />
        <path d="M50 90 Q 50 60 20 30 M 50 90 Q 50 60 80 35 M 50 90 Q 50 60 30 50 M 50 90 Q 50 60 75 60" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    );
  }
  return null;
}
