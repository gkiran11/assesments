import React, { useState } from "react";

const Test = () => {
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
    // Perform your search logic here based on the searchTerm, vegetarian, glutenFree, and cuisine values
    // For this example, we are just updating the searchResults state with dummy data.
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
        cuisine: "Indian",
      },
      {
        id: 3,
        name: "Recipe 3",
        vegetarian: true,
        glutenFree: true,
        cuisine: "Chinese",
      },
      // Add more dummy data or fetch real data from the API
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
          <option value="">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
          {/* Add more cuisine options as needed */}
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

export default Test;

// import React, { useState } from "react";

// function Recipie() {
//   const dataList = [
//     { id: 1, name: "Apple" },
//     { id: 2, name: "Banana" },
//     { id: 3, name: "Orange" },
//     { id: 4, name: "Grapes" },
//     // Add more data items as needed
//   ];

//   //   const dataLists = [
//   const countries = [
//     {
//       name: "Italian",
//       value: "it",
//       diet: ["vegetarian", "vegan", "gluten-free"],
//       cusine: ["italian", "mexican", "asian"],
//     },
//     {
//       name: "Mexican",
//       value: "mc",
//       diet: ["vegetarian", "vegan", "gluten-free"],
//       cusine: ["italian", "mexican", "asian"],
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState(dataList);
//   const [isChecked, setIsChecked] = useState(false);
//   const [isCheckeds, setIsCheckeds] = useState(false);
//   const [isCheckedss, setIsCheckedss] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const handleCountryChange = (e) => {
//     const selectedCountryValue = e.target.value;
//     setSelectedCountry(selectedCountryValue);
//     // setSelectedCity(""); // Reset the selected city when a new country is selected
//   };

//   const handleSelectChange = (event) => {
//     const selectedCountryValue = event.target.value;
//     setSelectedCountry(selectedCountryValue);
//     // setSelectedOption(event.target.value);
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };
//   const handleCheckboxChanges = () => {
//     setIsCheckeds(!isCheckeds);
//   };
//   const handleCheckboxChangess = () => {
//     setIsCheckedss(!isCheckedss);
//   };

//   const handleSearchChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//     filterData(value);
//   };

//   const filterData = (searchTerm) => {
//     const filteredResults = dataList.filter((item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(filteredResults);
//   };
//   return (
//     <>
//       <div>
//         <label>Select a Option:</label>
//         <select value={selectedCountry} onChange={handleSelectChange}>
//           <option value="">Select a Option</option>
//           {countries.map((country) => (
//             <option key={country.value} value={country.value}>
//               {country.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* <div>
//         <h2>Select Box Example</h2>
//         <select value={selectedOption} onChange={handleSelectChange}>
//           <option value="">Select an option</option>
//           <option value="italian">italian</option>
//           <option value="mexican">mexican</option>
//           <option value="asian">asian</option>
//         </select>

//         {selectedOption && <p>Selected Option: {selectedOption}</p>}
//       </div> */}
//       {selectedCountry && (
//         <div>
//           <h2>Select Type </h2>
//           <label>
//             <input
//               type="checkbox"
//               checked={isChecked}
//               onChange={handleCheckboxChange}
//             />
//             vegetarian
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               checked={isCheckeds}
//               onChange={handleCheckboxChanges}
//             />
//             vegan
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               checked={isCheckedss}
//               onChange={handleCheckboxChangess}
//             />
//             gluten-free
//           </label>
//           {/* <p>Is Checked: {isChecked ? "Yes" : "No"}</p> */}
//         </div>
//       )}
//       {selectedCountry && (
//         <div>
//           <label>Search</label>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search..."
//           />

//           <ul>
//             {searchResults.map((item) => (
//               <li key={item.id}>{item.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }

// export default Recipie;
