import "../../src/index.css"
const SearchBar = ({searchChanges , sub}) =>{
    return (
        <form className="input--form" onSubmit={sub}>
            <input 
                type="text" 
                placeholder="Enter a food name" 
                onChange= {searchChanges}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar