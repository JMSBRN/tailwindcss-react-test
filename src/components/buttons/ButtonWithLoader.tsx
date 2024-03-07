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
          idle: "btn-idle",
          loading: "btn-loading",
          success: "btt-success",
          error: "btn-error",
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
