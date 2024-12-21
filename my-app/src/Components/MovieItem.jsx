import { useMovieContext } from "./ContextMovie/ContextMovie";
import * as actions from "./Actions";

export default function MovieItem({ movie }) {
  const MovieContext = useMovieContext(); // استخدام useMovieContext بشكل صحيح
  const storedMovie = MovieContext.watchlist.find(
    (o) => o.imdbID === movie.imdbID
  );
  const storedMoviewatched = MovieContext.watched.find(
    (o) => o.imdbID === movie.imdbID
  );
  const watchlistDisabled = storedMovie
    ? true
    : storedMoviewatched
    ? true
    : false;
  const watchedDisabled = storedMoviewatched ? true : false;

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        {movie.Poster ? (
          <img
            className="card-img-top"
            src={movie.Poster}
            alt="Card image cap"
          />
        ) : (
          <div>Movie</div>
        )}

        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">
            <span>{movie.Type}</span>
            <span>{movie.Year}</span>
          </p>
          <div
            style={{
              display: "flex",
              width: "100%",
              gap: "20px",
            }}
          >
            {/* زر "Add to Watched" */}
            <button
              className="btn btn-primary"
              disabled={watchedDisabled}
              onClick={() =>
                MovieContext.MoviesDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHED, // استخدام نوع الإجراء لإضافة الفيلم إلى "المشاهد"
                  payload: movie, // تمرير الفيلم إلى الـ payload
                })
              }
            >
              Add to Watched
            </button>

            {/* زر "Add to Watch List" */}
            <button
              disabled={watchlistDisabled}
              className="btn btn-primary"
              onClick={() =>
                MovieContext.MoviesDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHLIST, // نوع الإجراء لإضافة الفيلم إلى "قائمة المشاهدة"
                  payload: movie, // تمرير الفيلم إلى الـ payload
                })
              }
            >
              Add to Watch List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
