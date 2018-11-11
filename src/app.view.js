// Import Underscore for templating
var _ = require('underscore');
// Import Backbone and its dependencies
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var FormContainer = require('./js/components/container/FormContainer');

var myComponent = createReactClass({
  render: function() {
    return '<h1>Text from myComponent</h1>';
  }
});

class anotherComponent extends React.Component {
  render() {
    return <h2>This text comes from anotherComponent.</h2>;
  }
}

// Import the template
var rawTemplate = require('./app.view.tpl');


var viewOptions = {
  el: 'body',

  initialize: function () {
    // Compile the template
    this.template = _.template(rawTemplate);

    // Render the view
    this.render();
  },

  render: function () {
    // Render the template
    var renderedHtml = this.template( { message: 'App Ready, Now With Templates!' });

    // Update the DOM
    this.$el.html(renderedHtml);  

    const wrapper = document.getElementById('create-article-form');
    wrapper.textContent += ' Eventually.';
   // ReactDOM.render(<FormContainer />, wrapper);
   ReactDOM.render(<h1>Does this work</h1>, wrapper);

  }
};

// Export our extended view
module.exports = Backbone.View.extend(viewOptions);



// const wrapper = document.getElementById('create-article-form');
// // wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
// ReactDOM.render(<FormContainer />, wrapper);
