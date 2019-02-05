import React from 'react';
import {connect} from 'react-redux';

import {getStories} from '../store/actions';

import ApprovalList from '../components/Admin/ApprovalList';

class ApprovalView extends React.Component {
    state = {
        stories: []
    };


    render() {
        return (
            <ApprovalList 
                history={this.props.history}
                getItemById={this.props.getItemById}
                stories={this.props.stories}
            />
        )
    }
}

const mapStateToProps = state => ({
    stories: state.stories
});

export default connect(
    mapStateToProps,
    {getStories}
)(ApprovalView);