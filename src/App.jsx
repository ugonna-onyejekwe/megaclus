import "./App.scss";
import { Navbar } from "./components/navbar/navbar";
import { About } from "./pages/about/about";
import { Home } from "./pages/home/home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
