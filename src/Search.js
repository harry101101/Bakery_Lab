import { useState } from "react";

const Search = ({filterCakes}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // better to set up a filterCakes function in App.js, and pass the function down
        // rather than to filter it here
        
        filterCakes(searchTerm);
        
        // const filteredCakes = cakes.filter((cake) => (cake.cakeName.toLowerCase().includes(searchTerm) && searchTerm !== ""));
        // setSearchResults(filteredCakes);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search-field">Search for a cake:</label>
                <input  type="text" 
                        id="search-field"
                        placeholder="Search"
                        name="searchTerm"
                        onChange={(event) => {setSearchTerm(event.target.value)}}
                        value={searchTerm}/>
                <input type="submit" value="OK" />
            </form>
            <section>
                    {
                    searchResults.map((cake, index) => {
                        return(
                            <div key={index}>
                                <h3>{cake.cakeName}</h3>
                                <ul>
                                    {cake.ingredients.map((ingredient, index) => {
                                        return(
                                            <li key={index}>{ingredient}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })
                    }
            </section>
        </>
        
        
    )

}

export default Search;