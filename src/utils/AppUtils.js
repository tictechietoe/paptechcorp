import React from 'react';

export const screenType = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    // lg: Large screens
    return 'lg';
  } else if (screenWidth >= 768) {
    // md: Medium screens
    return 'md';
  } else {
    // sm: Small screens
    return 'sm';
  }
};