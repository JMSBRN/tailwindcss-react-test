import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";
import Realty from "./pages/Realty";
import Test from "./pages/Test";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="realty" element={<Realty />} />
          <Route path="landing" element={<Landing />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <main>
    <header className="sticky top-0">
      <nav>
        <ul>
          <li>
            <Link className="header-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="header-link" to="/landing">Landing</Link>
          </li>
          <li>
            <Link className="header-link" to="/realty">Example with Realty Cards</Link>
          </li>
          <li>
            <Link className="header-link" to="/test">Testing Page</Link>
          </li>
        </ul>
      </nav>
    </header><Outlet />
    </main>
  );
}


function NoMatch() {
  return (
    <div className="text-center text-danger text-xl p-4">
    <h2 className="text-3xl font-bold text-red-500">Error 404: Page Not Found</h2>
    <p className="mt-4 text-gray-600">Oops! It looks like the page you're looking for does not exist.</p>
    <p className="mt-4">
      <a href="/" className="font-bold hover:text-primary">Go to the home page</a>
    </p>
  </div>
  );
}