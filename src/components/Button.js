import PropTypes from 'prop-types';
import '../css/calculator.css';

function Button({ id, className, onClick }) {
  return (
    <button type="button" id={id} className={className} onClick={onClick}>
      {id}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
