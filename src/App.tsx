import { useState } from "react";
import ButtonWithLoader from "./components/buttons/ButtonWithLoader";
import ThemeSwitcher from "./components/buttons/ThemeSwitcher";
import { LoaderType } from "./components/buttons/interfaces";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loaderPeriod, setIsLoaderPeriod] = useState<LoaderType>('idle');
   const handleClick = () => {
     setIsLoaderPeriod('loading');
     setTimeout(() => {
       setIsLoaderPeriod('success');
       setTimeout(() => {
         setIsLoaderPeriod('idle');
       }, 2000);
     }, 2000);
   };
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="main-container dark:bg-secondary">
        <h1 className="h1 font-sans dark:text-light">TailwindCSS with React</h1>
        <ButtonWithLoader
         state={loaderPeriod}
         onClick={handleClick}/>
        <div onClick={() => setIsDarkMode(!isDarkMode)}>
          <ThemeSwitcher state={isDarkMode} />
          <br />
        </div>
          <div className="loader"/>
      </div>
    </div>
  );
}

export default App;
