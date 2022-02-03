import { useEffect, useState } from "react";

export const useActiveId = (ids: string[]) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    ids.forEach((id) => {
      observer.observe(document.getElementById(id)!);
    });

    return () => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, ids);

  return activeId;
};
