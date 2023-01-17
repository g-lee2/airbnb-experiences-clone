import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";


function App() {
  const cardElements = data.map(person => {
      return (
        <Card
          key={person.id}
          person={person}
        />
      )    
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
