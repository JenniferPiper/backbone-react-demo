import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/Input';


class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      entry_title: '',
      entered_text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('this.state:', this.state);
  }

  render() {
    return (
      <Fragment>
        <form 
          id='article-form'
          onSubmit={this.handleSubmit}
          >
          <Input
            text='Entry Title'
            label='entry_title'
            type='text'
            id='entry_title'
            value={this.state.entry_title}
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
        </form>
      </Fragment>
    );
  }
}

export default FormContainer;