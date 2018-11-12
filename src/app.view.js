// Import Underscore for templating
var _ = require('underscore');

var Backbone = require('backbone');

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var FormContainer = require('./js/components/container/FormContainer').default;

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
   
    ReactDOM.render(<FormContainer />, wrapper);
  

  }
};

// Export our extended view
module.exports = Backbone.View.extend(viewOptions);
