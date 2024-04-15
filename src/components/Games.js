import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function Games() {
  const [query] = useSearchParams();
  const [games_ar, setGamesAr] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const url = "http://fs1.co.il/bus/xbox1.php";
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      const filter_ar = data.filter((item) => {
        return String(item.Year) === query.get("year");
      });
      console.table(filter_ar);
      setGamesAr(filter_ar);
    };

    getApi();
  }, [query]);

  return (
    <div className="container w-25">
      {games_ar.length > 0 ? (
        <>
          <h2 className="text-center">Games from year {query.get("year")}:</h2>
          <ul>
            {games_ar.map((item) => {
              return (
                <li key={item.Game}>
                  <Link to={item.GameLink}>{item.Game}</Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <h2 className="text-center">No games from year {query.get("year")}</h2>
      )}

      <Link to="/">
        <button className="container btn btn-warning">Back home</button>
      </Link>
    </div>
  );
}
