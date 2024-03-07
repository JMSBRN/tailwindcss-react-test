import { useState } from "react";
import ButtonWithLoader from "../components/buttons/ButtonWithLoader";
import ThemeSwitcher from "../components/buttons/ThemeSwitcher";
import { LoaderType } from "../components/buttons/interfaces";
import RealtyCard from "../components/cards/RealtyCard";

function Test() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loaderPeriod, setIsLoaderPeriod] = useState<LoaderType>("idle");
  const handleClick = () => {
    setIsLoaderPeriod("loading");
    setTimeout(() => {
      setIsLoaderPeriod("success");
      setTimeout(() => {
        setIsLoaderPeriod("idle");
      }, 2000);
    }, 2000);
  };
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="main-container dark:bg-secondary">
        <h1 className="h1 font-sans dark:text-light">TailwindCSS with React</h1>
        <ButtonWithLoader state={loaderPeriod} onClick={handleClick} />
        <div onClick={() => setIsDarkMode(!isDarkMode)}>
          <ThemeSwitcher state={isDarkMode} />
          <br />
        </div>
        <div className="loader" />
        <div className="max-w-2xl">
          <RealtyCard
            realtyObjectType="House"
            price="100000"
            bathrooms={2}
            bedrooms={4}
            address="123 Main St"
            realtorName="John Doe"
            realtorPhone="555-555-5555"
            realtorImageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            realtyObjectImageUrl="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Test;
