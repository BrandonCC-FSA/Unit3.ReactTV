import { useState } from "react";
import ShowDetails from "./shows/ShowDetails.jsx";
import ShowSelection from "./shows/ShowSelection.jsx";
import { tvShows } from "./shows/data.js";

/**
 * React TV is a web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={shows} onSelect={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
