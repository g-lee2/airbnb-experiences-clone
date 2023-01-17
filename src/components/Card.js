import React from "react"

function Card(props) {
    let badgeText
    if (props.person.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.person.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.person.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" />
                <span>{props.person.stats.rating}</span>
                <span className="gray">({props.person.stats.reviewCount}) • </span>
                <span className="gray">{props.person.location}</span>
            </div>
            <p>{props.person.title}</p>
            <p><span className="bold">From ${props.person.price}</span> / person</p>
        </div>
    )
}

export default Card;
