import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header className=" font-mono  flex items-center  p-3 shadow-md">
        <h1 className="text-3xl">Job Tracker</h1>
        <Link className="mx-5  hover:text-gray-700" to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link className="mx-5  hover:text-gray-700" to="/add">
          Add Job
        </Link>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            Job Tracker © 2025
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
