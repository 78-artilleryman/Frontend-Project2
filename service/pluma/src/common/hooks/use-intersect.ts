import { useCallback, useEffect, useRef } from "react";

// eslint-disable-next-line no-unused-vars
type FetchMoreItems = () => void;

export default function useIntersect<T extends HTMLElement>(fetchMoreItems: FetchMoreItems, loading: boolean) {
  const ref = useRef<T>(null);

  const callback = useCallback(
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && loading) {
          fetchMoreItems(); // 데이터를 불러오는 함수 실행
        }
      });
    },
    [fetchMoreItems, loading] // loading 상태와 fetchMoreItems를 의존성 배열에 포함
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [callback]);

  return ref;
}
