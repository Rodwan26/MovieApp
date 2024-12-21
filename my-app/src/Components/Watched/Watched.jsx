import Card from "./../Card";
import { useMovieContext } from "./../ContextMovie/ContextMovie";
export default function Watched() {
  const Movies = useMovieContext();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>My Watched Films</h3> <span>{Movies.watchlist.length}movies</span>
      </div>
      <div style={{ display: "flex" }}>
        <Card Movie={Movies} type="watched"></Card>
      </div>
    </div>
  );
}
