import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";


function App() {
  const cardElements = data.map(person => {
      return <Card 
          img={person.coverImg}
          reviewCount={person.stats.reviewCount} 
          location={person.location} 
          title={person.title}
          price={person.price}
          rating={person.stats.rating}
          />
  })
  return (
      <div>
          <Navbar />
          <Hero />
          {cardElements}
      </div>
  )
}

export default App;
