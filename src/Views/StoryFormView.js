import React from "react"
import { connect } from "react-redux"

import { submitStory } from "../store/actions"

import StoryForm from "../components/StoryForm/StoryForm"

class AddNewStory extends React.Component {
  state = {
    submission: {
      id: "",
      title: "",
      text: "",
      approved: false
    }
  }

  handleChange = e => {
    this.setState({
      submission: {
        ...this.state.submission,
        [e.target.name]: e.target.value
      }
    })
  }

  componentDidMount() {
    const serialize = paramString =>
      paramString
        .slice(1)
        .split(/&/g)
        .map(e => e.split(/=/))
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {})

    const { search } = this.props.location
    search &&
      this.setState(prevState => ({
        ...prevState,
        submission: { ...prevState.submission, title: serialize(search).name }
      }))
  }

  addStory = () => {
    this.props.submitStory(this.state.submission)
  }

  render() {
    return (
      <div>
        <StoryForm
          handleChange={this.handleChange}
          submission={this.state.submission}
          addStory={this.addStory}
          country={this.country}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(
  mapStateToProps,
  { submitStory }
)(AddNewStory)
