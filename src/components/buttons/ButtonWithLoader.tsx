interface ButtonWithLoaderProps {
  state: "idle" | "loading" | "success" | "error";
}

function ButtonWithLoader({ state }: ButtonWithLoaderProps) {
    const baseStyle = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer";
  return (
    <div
      className={
        {
          idle:  `bg-blue-500 ${baseStyle}`,
          loading: `bg-blue-300 ${baseStyle}`,
          success: `bg-green-500 ${baseStyle}`,
          error: `bg-red-500 ${baseStyle}`,
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
    </div>
  );
}

export default ButtonWithLoader;
