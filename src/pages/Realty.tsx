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
    <div className="flex flex-start justify-center pt-10">
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
  );
};

export default Realty;
