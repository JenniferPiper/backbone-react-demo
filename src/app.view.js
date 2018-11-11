// Import Underscore for templating
var _ = require('underscore');
// Import Backbone and its dependencies
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');



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
  }
};

// Export our extended view
module.exports = Backbone.View.extend(viewOptions);
