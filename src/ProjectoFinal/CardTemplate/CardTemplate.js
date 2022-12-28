

function CardTemplate(props) {
    return (
      <div className="card_template">
        <div className="top_part">
            <img src={props.foto} alt=""/>
        </div>
        <div className="bot_part">
            <h3>{props.name}</h3>
            <h4>{props.type}</h4>
            <h5>{props.price}</h5>
        </div>
      
      </div>
    );
  }
  
  export default CardTemplate;