import React from 'react';
import { Route, NavLink } from "react-router-dom";

function Story({stories, history, match}) {
    const story = stories.find(submission => `${submission.id}` === match.params.id);

    return (
        <div className="IndivStory">
            <div className="story-image">
                <img />
            </div>
            <div className="story-title">
                <h2>{story.title}</h2>
            </div>
            <div>
                <p>{story.text}</p>
            </div>
            <nav className="story-sub-nav">
                <NavLink exact to={`/story-list/${story.id}`}>Read More...</NavLink>
            </nav>
        </div>
        
    );
}


export default Story;