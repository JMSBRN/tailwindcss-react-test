import React, { useState, useEffect } from "react";
import { RealtyCardType } from "../components/cards/interfaces";
import RealtyCard from "../components/cards/RealtyCard";

const Realty: React.FC = () => {
  const [cards, setCards] = useState<RealtyCardType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jmsbrn-tg-bot.netlify.app/.netlify/functions/realty"
        );
        const json = await response.json();
        setCards(json.realty);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-24 px-10 flex justify-center items-center text-secondary text-base">
        <div className="w-1/3 h-12 flex justify-around items-center">
          <select className="w-1/4 h-8 rounded-default border-solid border-2" name="" id="">
            <option value="" selected>bedrooms</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
          <select className="w-1/4 h-8 rounded-default border-solid border-2" name="" id="">
          <option value="" selected>bathrooms</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
          <select className="w-1/4 h-8 rounded-default border-solid border-2" name="" id="">
          <option value="" selected>realtor</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </div>
        <div className="w-1/3 h-12 flex justify-center items-center ">
          <input className=" text-lg px-5 outline-none w-3/4 h-10 border border-secondary rounded-l-full" type="search" name="" id="" />
          <button 
          className="w-1/5 h-10 border rounded-r-full border-secondary hover:bg-gray active:bg-secondary active:text-light" type="button">search</button>
        </div>
      </div>
      <div className="flex flex-start justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {cards.map((card, idx) => (
            <div className="">
              <RealtyCard
                key={idx.toString()}
                realtorImageUrl={card.realtorImageUrl}
                realtyObjectImageUrl={card.realtyObjectImageUrl}
                realtyObjectType={card.realtyObjectType}
                price={card.price}
                address={card.address}
                bedrooms={card.bedrooms}
                bathrooms={Math.round(card.bathrooms)}
                realtorName={card.realtorName}
                realtorPhone={card.realtorPhone}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Realty;
