import {
    GET_STORIES,
    GET_STORIES_SUCCESS,
    GET_STORIES_FAILURE,
    SUBMITTING_STORY_START,
    SUBMITTING_STORY_SUCCESS,
    SUBMITTING_FAIL,
    
} from '../actions';

const initialState = {
    stories: [],
    gettingStories: false,
    submittingStory: true,
    storySubmitted: false,
    error: null,
}

function reducer(state = initialState, action) {
    switch(action.type) {

        case GET_STORIES:
        return {
            ...state,
            gettingStories:true
        }
        case  GET_STORIES_SUCCESS:
        return {
            ...state,
            stories: action.payload.s,
            gettingStories: false,
        }
        case GET_STORIES_FAILURE:
        return {
            ...state,
            error: null,
        }


        case SUBMITTING_STORY_START:
        return {
            ...state,
            submittingStory: true,
        }
        case SUBMITTING_STORY_SUCCESS:
        return {
            ...state,
            storySubmitted: true,
        }
        case SUBMITTING_FAIL:
        return {
            ...state,
            error: null,
        }
        
        default:
        return state;
    }
}

export default reducer;