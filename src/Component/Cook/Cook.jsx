import PropTypes from 'prop-types'

const Cook = ({cook}) => {
    const { recipeName } = cook
    return (
        <div>
            <h1>{recipeName}</h1>
            <h1>hello</h1>
        </div>
    );
};
Cook.propTypes = {
    cook: PropTypes.object
}
export default Cook;