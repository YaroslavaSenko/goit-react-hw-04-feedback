import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, ButtonItem } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonList>
            {options.map(option => {
                return (
                <ButtonItem type="button" onClick={() => onLeaveFeedback(option)}
                    key={option}
                >
                    {option}
                </ButtonItem>
            );
            })}
        </ButtonList>
            
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions

