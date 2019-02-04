import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const adminLogIn = () => dispatch => {
    dispatch({type: LOGGING_IN});
    axios 
    //what is the correct axios call syntax for get and .then?
    .get('')
    .then(res => dispatch({type: LOG_IN_SUCCESS, payload: res.data}))
    .catch(err => dispatch ({type: LOG_IN_FAILURE, payload: err}));

};