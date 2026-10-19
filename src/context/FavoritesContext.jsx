import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const KEY = "dragonbite-favorites";
const FavoritesContext = createContext(null);

const load = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(raw) ? raw.filter(Number.isFinite) : [];
  } catch {
    return [];
  }
};

export function FavoritesProvider({ children }) {
  const [ids, setIds] = useState(load);

  // remember saved recipes in this browser
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(ids));
    } catch {
      /* storage not available, ignore */
    }
  }, [ids]);

  // keep two open tabs in sync
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === KEY) setIds(load());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = useCallback(
    (id) =>
      setIds((current) =>
        current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
      ),
    []
  );

  const isFav = useCallback((id) => ids.includes(id), [ids]);

  const value = useMemo(
    () => ({ ids, count: ids.length, isFav, toggle }),
    [ids, isFav, toggle]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used inside <FavoritesProvider>");
  return ctx;
}