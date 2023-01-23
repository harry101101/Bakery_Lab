import { useState } from "react";

const CakeForm = ({addNewCake}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const cake = {
            cakeName: cakeName,
            ingredients: splitIngredients(ingredients),
            rating: rating
        };
        console.log("ingredients " + cake.ingredients);
    };

    const splitIngredients = (ingredientString) => {
        const ingredientArray = ingredientString.split(",");
        return ingredientArray;
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Cake Name:</label>
            <input type="text" id="name" name="cakeName"
                   onChange={(event) => {setCakeName(event.target.value)}} 
                   value={cakeName}/>
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea cols="30" rows="1" 
                    id="ingredients"
                    placeholder="Enter a comma-separated list" 
                    onChange={(event) =>{setIngredients(event.target.value)}} 
                    value={ingredients} 
                    name="ingredients"></textarea>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" min={1} max={5} onChange={(event) => {setRating(event.target.value)}} value={rating}/>
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;