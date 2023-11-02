import { useEffect } from "react";
import { useState } from "react";

import BackToTopIcon from '../assets/images/back-to-top.svg';

const BackToTop = () => {
  const [showBackTop, setShowBackTop] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setShowBackTop(position > 500 ? true : false);
  };

  // Scroll Listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div className={showBackTop ? 'fixed bottom-8 right-6' : 'hidden'}>
      <button className="rounded-full bg-purple-200 p-2 flex" onClick={handleClick}>
        <img src={BackToTopIcon} alt='back to top' className="h-6 w-8 my-1" />
      </button>
    </div>
  );
};

export default BackToTop;