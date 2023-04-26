import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import Data from "./components/data";

function App() {
  const card =Data.map((item)=> {
    return (
      <Card img={item.coverImg}
          rating={item.stats.rating}
          count= {item.stats.reviewCount}
          location= {item.location}
          title= {item.title}
          price= {item.price}
    />
    )
  })

  return <div className="App">
    <Navbar />
    <Hero />
    {card}
  </div>;
}

export default App;
