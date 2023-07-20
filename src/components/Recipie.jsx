import React, { useState } from "react";

const Recipie = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [vegetarian, setVegetarian] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [cuisine, setCuisine] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "vegetarian") {
      setVegetarian(checked);
    } else if (name === "glutenFree") {
      setGlutenFree(checked);
    }
  };

  const handleSelectChange = (event) => {
    setCuisine(event.target.value);
  };

  const handleSearch = () => {
    const dummySearchResults = [
      {
        id: 1,
        name: "Recipe 1",
        vegetarian: true,
        glutenFree: false,
        cuisine: "Italian",
      },
      {
        id: 2,
        name: "Recipe 2",
        vegetarian: false,
        glutenFree: true,
        cuisine: "Asian",
      },
      {
        id: 3,
        name: "Recipe 3",
        vegetarian: true,
        glutenFree: true,
        cuisine: "Mexican",
      },
      {
        id: 4,
        name: "Recipe 4",
        vegetarian: true,
        glutenFree: false,
        cuisine: "Mexican",
      },
    ];

    const filteredResults = dummySearchResults.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!vegetarian || recipe.vegetarian) &&
        (!glutenFree || recipe.glutenFree) &&
        (!cuisine || recipe.cuisine === cuisine)
      );
    });

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for recipes..."
      />

      <label>
        Vegetarian:
        <input
          type="checkbox"
          name="vegetarian"
          checked={vegetarian}
          onChange={handleCheckboxChange}
        />
      </label>

      <label>
        Gluten-Free:
        <input
          type="checkbox"
          name="glutenFree"
          checked={glutenFree}
          onChange={handleCheckboxChange}
        />
      </label>

      <label>
        Cuisine:
        <select value={cuisine} onChange={handleSelectChange}>
          <option value="">All</option>
          <option value="Italian">Italian</option>
          <option value="Asian">Asian</option>
          <option value="Mexican">Mexican</option>
        </select>
      </label>

      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipie;
