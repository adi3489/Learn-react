import { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./StarRating";

// import "./index.css";
// import App from "./App.jsx";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movies was rated {movieRating} stars</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating="5"
      messages={["terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating sixe={24} color="red" className="test" defaultRating={3} />
    <Test />
  </StrictMode>
);
