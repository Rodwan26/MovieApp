import { useMovieContext } from "./../ContextMovie/ContextMovie";
import Card from "../Card.jsx";
export default function WatchList() {
  const Movies = useMovieContext();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>My Watchlist</h3> <span>{Movies.watchlist.length}movies</span>
      </div>
      <div>
        <Card Movie={Movies} type="watchlist"></Card>
      </div>
    </div>
  );
}
