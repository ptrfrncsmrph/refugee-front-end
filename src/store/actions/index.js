import axios from 'axios';

export const GET_STORIES = 'GET_STORIES';
export const GET_STORIES_SUCCESS = 'GET_STORIES_SUCCESS';
export const GET_STORIES_FAILURE = 'GET_STORIES_SUCCESS';

export const SUBMITTING_STORY_START = 'SUBMITTING_STORY_START';
export const SUBMITTING_STORY_SUCCESS = 'SUBMITTING_STORY_SUCCESS';
export const SUBMITTING_FAIL = 'SUBMITTING_FAIL';


//functionality for fetching the stories data from the backend
//used on both the individual story view and the main listed story view

export const getStories = () => dispatch => {
    dispatch({type: GET_STORIES});
    axios
        .get('')
        .then(res => 
            dispatch({type: GET_STORIES_SUCCESS, payload: res.data}))
        .catch(err => 
            dispatch({type: GET_STORIES_FAILURE, payload: err}));
};


//fucntionality for user to submit story into approval queue

export const submitStory = story => dispatch => {
    dispatch({type: SUBMITTING_STORY_START});
    axios
        .post('', story)
        .then(res => {
            dispatch({type: SUBMITTING_STORY_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: SUBMITTING_FAIL, payload: err}));
};


//functionality for admin to see stories that need approval

// export const approveStory = story => dispatch => {
//     dispatch({type: })
// }
