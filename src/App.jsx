import { Routes, Route } from "react-router-dom";
import Layout from "./componets/Layout";
import Home from "./pages/Home";
import JobForm from "./componets/JobForm";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<JobForm />} />
          <Route path="*" />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
