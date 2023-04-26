import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import CardPic1 from "./images/card1.webp";
import CardPic2 from "./images/card2.webp";
import cardPic3 from "./images/card3.jpeg";
import cardPic4 from "./images/card4.jpeg";
import cardPic5 from "./images/card5.webp";
import cardPic6 from "./images/card6.webp";
function App() {
  return <div className="App">
    <Navbar />
    <Hero />
    <Card img={CardPic1}
          rating="5"
          count= "10"
          place= "USA"
          desc= "enjoyed a lot"
          price= "135"
    />
    <Card img={CardPic2}
          rating="5"
          count= "4"
          place= "Italy"
          desc= "superb vacation "
          price= "200"
    />
    <Card img={cardPic3}
          rating="4.5"
          count= "6"
          place= "France"
          desc= "too much fun"
          price= "230"
    />
    <Card img={cardPic4}
          rating="4.0"
          count= "7"
          place= "USA"
          desc= "loved it and will visit again"
          price= "170"
    />
    <Card img={cardPic5}
          rating="3.5"
          count= "10"
          place= "UK"
          desc= "got an escape from the stress"
          price= "210"
    />
    <Card img={cardPic6}
          rating="3.5"
          count= "8"
          place= "Russia"
          desc= "great weekends"
          price= "135"
    />
  </div>;
}

export default App;
