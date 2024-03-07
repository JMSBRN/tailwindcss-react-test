import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
  <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
  <p className="text-gray-600 mb-4">This project for testing Tailwind CSS in React</p>
  <p className="text-lg text-blue-500 hover:underline"><Link to="/test">Learn never stop...</Link></p>
</div>
  )
}

export default Home;