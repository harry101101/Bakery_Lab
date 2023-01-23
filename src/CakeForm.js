const CakeForm = ({addNewCake}) => {

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Cake Name:</label>
            <input type="text" id="name" name="cakeName" onChange={(event) => setCakeName} />
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea cols="30" rows="1" id="ingredients"></textarea>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" min={1} max={5}/>
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;