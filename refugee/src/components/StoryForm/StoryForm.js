import React from 'react';

function StoryForm(props) {

    return (
        <div className="StoryForm">

            <input 
                type="text"
                name="title"
                placeholder="Name - please feel free to remain anonymous"
                onChange={props.handleChange}
                value={props.submission.title}
            />

            <input 
                type="text"
                name="text"
                placeholder="Share your story"
                onChange={props.handleChange}
                value={props.submission.text}
            />



        </div>
    )

}

export default StoryForm;