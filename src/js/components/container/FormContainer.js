'use strict';

import React, { Component, Fragment } from 'react';
import Input from '../presentational/Input';
import ContentDisplay from '../presentational/ContentDisplay';

const initialState = {
  entered_title: '',
  submitted_title: '',
  entered_text: '',
  submitted_text: ''
}

class FormContainer extends Component {
  constructor() {
    super();

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('this.state:', this.state);
    this.setState({submitted_text: this.state.entered_text});
    this.setState({submitted_title: this.state.entered_title});
  }
  handleReset(event) {
    event.preventDefault();
    this.setState(initialState);
  }

  render() {
    return (
      <Fragment>
        <form 
          id='article-form'
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
          >
          <Input
            text='Entry Title'
            label='entered_title'
            type='text'
            id='entered_title'
            value={this.state.entered_title}
            handleChange={this.handleChange}
          />
          <Input
            text='Enter some text here:'
            label='entered-text'
            type='text'
            id='entered_text'
            value={this.state.entered_text}
            handleChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
          <button type='reset'>Clear</button>
        </form>
        <ContentDisplay 
        title={this.state.submitted_title}
        entered_text={this.state.submitted_text}/>
      </Fragment>
    );
  }
}

export default FormContainer;