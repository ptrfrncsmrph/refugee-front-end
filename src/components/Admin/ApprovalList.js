import React from 'react';

function ApprovalList(props) {
    function routeToStory(e, story) {
        e.preventDefault();
        props.history.push(`/story-list${story.id}`);
        props.getItemById(story.id)
    }

    return (
        <div className="story-list">
            {props.stories.filter((story) => {
                story.approved === false
                <div
                    onClick={e => routeToStory(e, story)}
                >

                </div>
            })}
        </div>
    )
}