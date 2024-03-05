import ButtonWithLoader from "./components/buttons/ButtonWithLoader";

function App() {
  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        Hello world!
        <ButtonWithLoader state="idle" />
      </div>
  );
}

export default App;
