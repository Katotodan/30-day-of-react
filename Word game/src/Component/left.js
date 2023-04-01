import React from 'react'

export default class Left extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            categorie:"musique",
            level:"easy",
            limit: 10
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (event){
        event.target.name === "limit" ? 
            this.setState({[event.target.name]: parseInt(event.target.value)}) 
            : this.setState({[event.target.name]: (event.target.value)})
        
    }
    render(){


        return(
            <div className="left--container">
                <form>
                    <h3>Search by</h3>
                    <div>
                        <label>Categorie</label><br/>
                        <select 
                        value={this.state.categorie} 
                        name="categorie"
                        onChange={this.handleChange}
                        >
                            <option value="musique" >Musique</option>
                            <option value="geography">Geography</option>
                            <option value="history">History</option>
                            <option value="science">Science</option>
                            <option value="film_and_tv">Film & TV</option>
                            <option value="food_and_drink">Food & Drink</option>
                        </select>
                        
                    </div>
                    <div>
                        <label>Diffuculty</label><br/>
                        <select 
                        value={this.state.level} 
                        name="level"
                        onChange={this.handleChange}
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div>
                        <label>Limit: {this.state.limit}</label><br/>
                        <input 
                        type="range" 
                        id="limit" 
                        name="limit" 
                        min="1" max="15"
                        value={this.state.limit}
                        onChange={this.handleChange}
                        /><br/>
                        <span>Number of question to be return</span>
                    </div>
                    <button 
                    onClick = { (e) =>{
                        e.preventDefault()
                        this.props.searchData(
                            this.state.categorie,
                            this.state.level,
                            this.state.limit
                        )
                    }   
                    }>Search</button>
                </form>
            </div>
        )
    }
}
