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
      <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-dark">
        <h1 className="text-primary text-xl dark:text-light mb-8">TailwindCSS with React</h1>
        <ButtonWithLoader
         state={loaderPeriod}
         onClick={handleClick}/>
        <div onClick={() => setIsDarkMode(!isDarkMode)}>
          <ThemeSwitcher state={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
