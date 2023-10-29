import { useEffect } from "react";
import { useState } from "react";

import backToTop from '../assets/images/back-to-top.jpg';

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
          <button className="rounded block bg-purple-200 p-2 flex" onClick={handleClick}>
              <img src={backToTop} alt='back to top' className="h-4 w-6 pr-2 mt-1"/>
              <span className="text-purplelake text-extrabold">Back To Top</span>
          </button>
      </div>
  );  
};

export default BackToTop;