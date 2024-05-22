import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import { Payment } from "./pages/";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </Layout>
  );
}

export default App;
