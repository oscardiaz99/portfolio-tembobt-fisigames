"use client";

import { useEffect, useRef, useState } from "react";

export function useLazyActivation({ disabled = false, rootMargin = "240px 0px" } = {}) {
  const targetRef = useRef(null);
  const [isActive, setIsActive] = useState(disabled);

  useEffect(() => {
    if (disabled) {
      setIsActive(true);
      return undefined;
    }

    const node = targetRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [disabled, rootMargin]);

  return {
    ref: targetRef,
    isActive,
  };
}
