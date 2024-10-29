import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Default } from "./pages/Default";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/:id" element={<Default />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
