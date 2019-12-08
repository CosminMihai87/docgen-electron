import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    let isSM = false;
    let isMD = false;
    let isLG = false;
    let isXL = false;
    if (window.innerWidth >= 1200) {
      isXL = true;
    } else if (window.innerWidth < 1200 && window.innerWidth >= 992) {
      isLG = true;
    } else if (window.innerWidth < 992 && window.innerWidth > 768) {
      isMD = true;
    } else if (window.innerWidth <= 768) {
      isSM = true;
    }

    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      isXL: isClient ? isXL : undefined,
      isLG: isClient ? isLG : undefined,
      isMD: isClient ? isMD : undefined,
      isSM: isClient ? isSM : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

export default useWindowSize;
