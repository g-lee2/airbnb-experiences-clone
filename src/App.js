import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";


function App() {
  const cardElements = data.map(person => {
      return <Card 
          key={person.id}
          img={person.coverImg}
          reviewCount={person.stats.reviewCount} 
          location={person.location} 
          title={person.title}
          price={person.price}
          rating={person.stats.rating}
          openSpots={person.openSpots}
          />
  })
  return (
      <div>
          <Navbar />
          <Hero />
          <section className="cards-list">
            {cardElements}
          </section>
      </div>
  )
}

export default App;
