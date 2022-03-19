import Navbar from "./components/Navbar";
import Content from "./components/Content";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Content key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
