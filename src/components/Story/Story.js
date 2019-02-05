import React from 'react';
import { Route, NavLink } from "react-router-dom";

function Story({stories, match}) {
    const indivstory = stories.find(submission => `${submission.id}` === match.params.id)

    return (
        <div className="IndivStory">
            <div className="story-image">
                <img />
            </div>
            <div className="story-title">
                <h2>Title or Name</h2>
            </div>
            <div>
                <p>Posted Story</p>
            </div>
            <nav className="story-sub-nav">
                <NavLink exact to={`/story-list/${indivstory.id}`}>Read More...</NavLink>
            </nav>
        </div>
        
    );
}


export default Story;