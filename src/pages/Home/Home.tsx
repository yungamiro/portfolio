import React from "react";
import "./Home.css";
import Selfie from "../../assets/selfie.jpg";

const Home: React.FC<{ turned: boolean; active: boolean }> = ({
  turned,
  active,
}) => {
  return (
    <div
      className={`page home ${turned ? "turned" : ""} ${
        active ? "active" : ""
      }`}
    >
      <div className="content">
        <div className="me">
          <h1>Amir Abdallah-Khodja</h1>
          <img src={Selfie} alt="Selfie" />
        </div>
        <div className="me-body">
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            explicabo adipisci repellendus quaerat repudiandae minus vero in
            sequi enim, dolores officia sapiente a amet omnis? Veritatis iusto
            sequi obcaecati nisi!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
