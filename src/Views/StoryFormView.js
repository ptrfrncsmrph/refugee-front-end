import React from 'react';
import {connect} from 'react-redux';

import {submitStory} from '../store/actions';

import StoryForm from '../components/StoryForm/StoryForm';

class AddNewStory extends React.Component {
    state= {
        submission: {
            id: '',
            title: '',
            text: '',
            approved: false,
        }
    };

    handleChange = e => {
        this.setState({
            submission: {
                ...this.state.submission,
                [e.target.name]: e.target.value
            }
        });
    };

    addStory = () => {
        this.props.submitStory(this.state.submission);
    };

    render() {
        return (
            <div>
                <StoryForm 
                    handleChange={this.handleChange}
                    submission={this.state.submission}
                    addStory={this.addStory}
                />

            </div>
        )
    }

}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {submitStory}
)(AddNewStory);