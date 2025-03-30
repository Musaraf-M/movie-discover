import { useEffect, useRef } from "react";

interface Props {
  loadMore: () => void;
}

const InfiniteScrollTrigger = ({ loadMore }: Props) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loadMore]);

  return <div ref={observerRef} style={{ height: "20px" }} />;
};

export default InfiniteScrollTrigger;
