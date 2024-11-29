import { useEffect, useState } from 'react';

const InfiniteScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Reset scroll position when reaching bottom
      if ((window.innerHeight + position) >= document.body.offsetHeight) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="infinite-scroll-container">
      {/* Your content here */}
    </div>
  );
}; 