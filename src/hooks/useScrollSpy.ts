import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const listeners = () => {
      const scrollY = window.scrollY;
      
      // Find the section that is currently in the "active zone"
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - offset && scrollY < offsetTop + offsetHeight - offset) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", listeners);
    // Run once on mount to set initial state
    listeners();

    return () => window.removeEventListener("scroll", listeners);
  }, [sectionIds, offset]);

  return activeId;
};