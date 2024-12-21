import * as actions from "./Actions.jsx";
import { useMovieContext } from "./ContextMovie/ContextMovie";
export default function Buttons({ type, el }) {
  const MovieContext = useMovieContext();
  return (
    <div>
      {type === "watched" && (
        <>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.MOVE_MOVIE_TO_WATCHLIST,
                payload: el,
              })
            }
          >
            {" "}
            <i className="fa-solid fa-eye-slash"></i>
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: el.imdbID,
              })
            }
          >
            {" "}
            <i className="fa-solid fa-times"></i>
          </button>
        </>
      )}
      {type === "watchlist" && (
        <>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: el,
              })
            }
          >
            {" "}
            <i className="fa-solid fa-eye"></i>
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: el.imdbID,
              })
            }
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}
