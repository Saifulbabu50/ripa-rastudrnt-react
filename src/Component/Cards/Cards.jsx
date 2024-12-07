import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types'

const Cards = ({ handleAddToCooking }) => {
    const[cards, setCards] = useState([])
    useEffect(() =>{
        fetch('Card.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="w-2/3  ">
            <h1>Cards: {cards.length}</h1>
            <div className="grid grid-cols-2 gap-2">
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}
                        handleAddToCooking={handleAddToCooking}
                    ></Card>)
                }
           </div>
        </div>
    );
};
Cards.propTypes ={
    handleAddToCooking: PropTypes.func
}
export default Cards;