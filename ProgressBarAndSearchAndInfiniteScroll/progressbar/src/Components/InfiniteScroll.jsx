import React, { useState, useEffect, useRef, useCallback } from "react";

export function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();

  // Target the last item element for observing intersection
  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  // Fetch paginated data
  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setItems((prev) => [...prev, ...data]);
          setHasMore(data.length > 0);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));

    return () => {
      ignore = true;
    };
  }, [page]);

  return (
    <div
      style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}
    >
      <h2>Infinite Scroll Posts</h2>
      <div>
        {items.map((item, index) => {
          const isLast = items.length === index + 1;
          return (
            <div
              key={`${item.id}-${index}`}
              ref={isLast ? lastItemRef : null}
              style={{
                padding: "16px",
                border: "1px solid #ccc",
                marginBottom: "10px",
                borderRadius: "4px",
              }}
            >
              <h4>
                {item.id}. {item.title}
              </h4>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
      {loading && <p style={{ textAlign: "center" }}>Loading more items...</p>}
      {!hasMore && (
        <p style={{ textAlign: "center" }}>No more items to load.</p>
      )}
    </div>
  );
}
