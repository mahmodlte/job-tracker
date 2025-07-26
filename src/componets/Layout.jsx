const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className=" font-mono text-3xl p-3 shadow-md">
        <h1>Job Tracker</h1>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            Job Tracker © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
