import "./style/card.css"

export const Card = ({image , title, desc}) =>{
    return <>
        <div className="outer_container">
            <div className="card_container">
                <div className="image_container">
                    <img src={image} alt="img" />
                </div>
                <div className="text_container">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
        <br/>
    </>
}