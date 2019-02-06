import React from 'react';

function Approval({stories, match}) {
    const story = stories.find(submission => `${submission.id}` === match.params.id);

    return (
        <div className="story-wrapper">
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
            </div>
            <button>Approve</button>
            <button>Delete</button>
        </div>
    )
}

export default Approval;