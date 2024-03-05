const ThemeSwitcher = ({
  state,
}: {
  state: boolean;
}) => {
  return (
    <button className="text-3xl py-3 px-3 bg-transparent">
      {state ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeSwitcher;
