import "../../src/index.css"

const SearchBar = ({searchChanges , sub , value}) =>{
    return (
        <form className="input--form" onSubmit={sub} action="/">
            <input 
                type="text" 
                placeholder="Search by food's name" 
                onChange= {searchChanges}
                value={value}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar