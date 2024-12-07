import PropTypes from 'prop-types'
import Cook from '../Cook/Cook';


const Cooking = ({ cooking }) => {
    
    return (
        <div className="md:w-1/3">
            <h2 className="text-3xl">Want to cook:{cooking.length}</h2>
            {
                cooking.map(cook=><Cook key={cook.id} cook={cook}></Cook>)
            }
        </div>
    );
};
Cooking.propTypes={
    cooking : PropTypes.array
}
export default Cooking;