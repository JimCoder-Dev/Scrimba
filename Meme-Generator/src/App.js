import { createRoot } from "react-dom/client";
import Header from "./components/Header";
const container = document.getElementById("root");
const root = createRoot(container);
import Header from "./components/Header";
import Meme from "./components/Meme";

const App = () => {
  return (
    <>
      <Header />
      <Meme />
    </>
  );
};

root.render(<App />);
