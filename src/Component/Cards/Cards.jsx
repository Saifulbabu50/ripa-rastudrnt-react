import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
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
                    ></Card>)
                }
           </div>
        </div>
    );
};

export default Cards;