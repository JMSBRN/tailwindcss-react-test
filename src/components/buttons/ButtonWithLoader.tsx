import { LoaderType } from "./interfaces";
function ButtonWithLoader({
  state,
  onClick,
}: {
  state: LoaderType;
  onClick: () => void;
}) {
  return (
    <button
      onClick={
        {
          idle: onClick,
          loading: () => {},
          success: () => {},
          error: () => {},
        }[state]
      }
      className={
        {
          idle: "bg-primary dark:bg-danger btn text-dark dark:text-light",
          loading: "bg-secondary dark:bg-primary btn text-dark dark:text-light",
          success: "bg-success dark:bg-success btn text-dark dark:text-light",
          error: "bg-danger btn text-dark dark:text-light",
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
