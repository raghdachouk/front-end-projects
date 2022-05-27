import "./App.css";
import { DataContextWrapper } from "./context/dataContext";

import Layout from "./layout";
import Home from "./pages/home";

function App() {
  return (
    <DataContextWrapper>
      <Layout>
        <Home />
      </Layout>
    </DataContextWrapper>
  );
}

export default App;
