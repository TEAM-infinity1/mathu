import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Journey gives you most beautiful memories with more excitement.</p>
      <DestinationData
        className="first-des"
        heading="Bali-Indonesia"
        text=<p>Day 1: Arrive in Ubud...<br></br>
     Day 2: Tegalalang rice terraces and Ubud surroundings...<br></br>
     Day 3: Sunset hike at Batur...<br></br>
     Day 4: Eastern Temples of Bali – Besakih, Lempuyang and Tirta Gangga.<br></br>
     Day 5: Ulun Danu Beratan. ...<br></br>
     Day 6: Taman Ayun Temple, Tanah Lot and Canggu.<br></br>
     Day 7: Jimbaran and Uluwatu.</p>
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="New Orleans"
        text="To plan a 4-Day New Orleans Itinerary, we recommend using our outlined Three Days in New Orleans Itinerary as a base for your trip. Then, on the last day, take a full-day tour. We recommend either taking the combo Swamp and Plantation Tour or spending the day at the Whitney Plantation or Oak Alley.!!"
        img3={Mountain3}
        img4={Mountain4}
      />
    </div>
  );
};
export default Destination;
