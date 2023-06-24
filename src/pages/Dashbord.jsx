import React from "react";
import "../styles/Dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";
import MileCHart from "../charts/MileCHart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../UI/RecommendCarCard";
import recommendCarsData from "../assets/dummy-data/recommendCars"
const carObj = {
  title: "Jami avtomobillar",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const trjpObj = {
  title: "Kundalik maslahatlar",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Har yilgi mijozlar",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Har kuni kilometr",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};
const Dashbord = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={trjpObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Millar statistikasi</h3>
            <MileCHart />
          </div>
          <div className="stats">
            <h3 className="stats__title">Avtomobillar statistikasi</h3>
            <CarStatsChart />
          </div>
        </div>
        <div className="recommend__cars-wrapper">
        {
          recommendCarsData.map(item => <RecommendCarCard item={item} key={item.id}/>)
        }
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
