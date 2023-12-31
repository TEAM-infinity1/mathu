import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/7.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Discover Your Unique Destination</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Country in Southern Asia and Oceania between the Indian and Pacific oceans"
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
        />
      </div>
    </div>
  );
}
export default Trip;
