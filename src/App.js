import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./RecipeList";
import Search from "./Search";
import CakeForm from "./CakeForm";
import { useState } from "react";

function App() {
  const [cakes, setCakes] = useState ([
    {
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }
  ])

  const addNewCake = (newCake) => {
    setCakes([...cakes, newCake]);
  }

  const [filteredCakes, setFilteredCakes] = useState("");

  const filterCakes = (searchTerm) => {
    // console.log(`${searchTerm}`)
    const foundCakes = cakes.filter(cake => {
      return cake.cakeName.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setFilteredCakes(foundCakes);
  }

  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        
        <Search filterCakes={filterCakes}/>
        <CakeForm addNewCake={addNewCake}/>
        {/* Ternary operator below: if filteredCakes exists, send filteredCakes into RecipeList*/}
        {/* If there are no filteredCakes, send back just cakes */}
        <RecipeList cakes={filteredCakes ? filteredCakes : cakes}/>
      </main>
    </>
  );
}

export default App;
