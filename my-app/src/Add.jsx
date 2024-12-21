import axios from "axios";
import { useState, useEffect } from "react";
import MovieItem from "./Components/MovieItem";
export default function Add() {
  const [valueSearch, setvalueSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${valueSearch}&apikey=b07f04eb`)
      .then((response) => {
        console.log(response);
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      });
  }, [valueSearch]);

  return (
    <div>
      <div className="container mt-5">
        <h2>Simple Input Field Example</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label">
              Enter Movie
            </label>
            <input
              type="text"
              value={valueSearch}
              onChange={(e) => setvalueSearch(e.target.value)}
              className="form-control"
              id="exampleInput"
              placeholder="Type here"
            />
          </div>
        </form>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          backgroundColor: "black",
        }}
      >
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie}></MovieItem>
        ))}
      </div>
    </div>
  );
}
