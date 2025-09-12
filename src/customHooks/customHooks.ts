import { useEffect,useState } from "react";

const useViewportWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Use document.documentElement.clientWidth to exclude the scrollbar
      setWidth(document.documentElement.clientWidth);
    };

    // Initial width on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default useViewportWidth