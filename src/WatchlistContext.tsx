import { createContext, useContext, useEffect, useState } from "react";

const defaultValue = {
  watchlist: [] as number[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggleWatchlist: (id: number) => {},
};

const WatchlistContext = createContext(defaultValue);

export const WatchlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [watchlist, setWatchlist] = useState<number[]>(() => {
    const saved = localStorage.getItem("watchlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (id: number) => {
    setWatchlist((prev) =>
      prev.includes(id)
        ? prev.filter((movieId) => movieId !== id)
        : [...prev, id]
    );
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, toggleWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
