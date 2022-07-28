import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handlerFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <button
          type="button"
          name={item}
          onClick={handlerFeedback}
          key={item}
          style={{ textTransform: 'capitalize', marginRight: '10px' }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  handlerFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
