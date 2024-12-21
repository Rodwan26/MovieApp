import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "./Reducer";
const initialeState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GloblContext = createContext(initialeState);
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialeState);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(state.watched));
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  });

  return (
    <GloblContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        MoviesDispatch: dispatch,
      }}
    >
      {children}
    </GloblContext.Provider>
  );
};
export default ContextProvider;
export const useMovieContext = () => {
  return useContext(GloblContext);
};
