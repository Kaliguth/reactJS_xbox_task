import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [year, setYear] = useState("");

  return (
    <div className="text-center">
      <h2>Home</h2>
      <h4>Search games by year:</h4>
      <input
        className="rounded pb-1"
        type="number"
        value={year}
        min="2000"
        max="2010"
        onChange={(event) => setYear(event.target.value)}
      />
      <span> </span>
      <Link to={`/games?year=${year}`}>
        <button className="btn btn-warning">Search</button>
      </Link>
    </div>
  );
}
