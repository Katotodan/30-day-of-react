import "../../src/index.css"
const SingleFood = ({title, imgSrc, area, category, id}) =>{
    return (
        <div key={id} className="food--container">
            <h3 className="food--title">{title}</h3>
            <img src={imgSrc} className="food--img"/>
            <div className="food--details">
                <p>Area: {area}</p>
                <p>Category: {category}</p>
            </div>
            <a href={id} className="food--more">More</a>
            <hr/>
        </div>
    )
}

export default SingleFood