import React from 'react';
import {connect} from 'react-redux';

import StoryForm from '../components/StoryForm/StoryForm';

class AddNewStory extends React.Component {
    state= {
        submission: {
            id: '',
            title: '',
            text: ''
        }
    };

    handleChange = e => {
        this.setSate({
            submission: {
                ...this.state.submission,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <div>
                <StoryForm 
                    handleChange={this.handleChange}
                    submission={this.state.submission}
                />

            </div>
        )
    }

}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {}
)(AddNewStory);