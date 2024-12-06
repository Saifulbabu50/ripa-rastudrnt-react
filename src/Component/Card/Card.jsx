import Time from "../../assets/Time (2).png"
import Vector from "../../assets/Vector (1).png"
import PropTypes from 'prop-types'

const Card = ({ card }) => {
    const { img, recipeName, description, ingredients, time, calories, action }= card
    return (
        <div className=' p-5  border-black   '>
            <div className="card bg-base-100  shadow-xl rounded-md ">
                <figure>
                    <img className="h-48 w-80 rounded-xl"
                        src={img}
                        alt="" />
                </figure>
                <div className="card-body p-5">
                    <div className='border-b-4 border-slate-400'>
                        <h2 className="card-title text-xl font-semibold">{recipeName}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="border-b-4 border-slate-400 pt-4" >
                        <h1 className='text-xl font-medium'>Ingredients: 3</h1>
                        <p>
                            {
                                ingredients.map(ingr => <li>{ingr}</li>)
                            }
                        </p>
                    </div>
                    <div className="gap-5">
                        <div className="flex pb-4 pt-4  gap-2">
                            <div className="flex">
                                <img src={Time} alt="" />
                                <h1>{time}: minutes</h1>
                            </div>
                            <div className="flex">
                                <img src={Vector} alt="" />
                                <h1>calories:{calories}</h1>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="bg-green-700 w-40 text-xl font-medium rounded-full">{action}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes ={
    card: PropTypes.object.isRequired
}
export default Card;