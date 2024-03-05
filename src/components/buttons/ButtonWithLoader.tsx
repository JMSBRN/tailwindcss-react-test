import { LoaderType } from "./interfaces";

function ButtonWithLoader({ state, onClick }: { state: LoaderType; onClick: () => void }) {
  const baseStyleButton =
    "dark:bg-primary text-lg rounded-lg px-4 px-4 py-2 cursor-pointer hover:text-light dark:text-light dark:hover:bg-primary dark:hover:text-dark shadow-xl";
  return (
    <button
      onClick={onClick}
      className={
        {
          idle: `bg-primary dark:bg-danger ${baseStyleButton}`,
          loading: `bg-secondary  dark:bg-primary ${baseStyleButton}`,
          success: `bg-success  dark:bg-success ${baseStyleButton}`,
          error: `bg-danger ${baseStyleButton}`,
        }[state]
      }
    >
      {
        {
          idle: "Click me",
          loading: "Loading...",
          success: "Success!",
          error: "Error!",
        }[state]
      }
    </button>
  );
}

export default ButtonWithLoader;
