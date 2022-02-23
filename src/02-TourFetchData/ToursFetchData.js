import { useState } from "react";
import { Loading } from "./Loading";
import { Tours } from "./Tours";

const url = "https://course-api.com/react-tours-project";

export const TourFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  fetch("url").then((res) => {
    return res.json();
  });

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Tours />
    </div>
  );
};
