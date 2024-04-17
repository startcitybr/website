'use client';

import AOS from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

export const AosInit = ({ children }) => {
  useEffect(() => {
    AOS.init({
      anchorPlacement: 'top-bottom',
      mirror: true,
      offset: -100,
      once: false,
    });
  }, []);

  return <>{children}</>;
};