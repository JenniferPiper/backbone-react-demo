// Import Underscore for templating
var _ = require('underscore');
// Import Backbone and its dependencies
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var FormContainer = require('./js/components/container/FormContainer');




// Import the template
//var rawTemplate = require('./app.view.tpl');


var viewOptions = {
  el: 'body',

  initialize: function () {
    // Compile the template
    //this.template = _.template(rawTemplate);

    // Render the view
    this.render();
  },

  render: function () {
    // Render the template
    //var renderedHtml = this.template( { message: 'App Ready, Now With Templates!' });

    var renderedHtml = '<div id="create-article-form">This text from app.view.js</div>';

    // Update the DOM
    this.$el.html(renderedHtml);
    const wrapper = document.getElementById('create-article-form');
    wrapper.textContent += 'yo sup';
  // ReactDOM.render(<FormContainer />, wrapper);

  }
};

// Export our extended view
module.exports = Backbone.View.extend(viewOptions);



// const wrapper = document.getElementById('create-article-form');
// // wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
// ReactDOM.render(<FormContainer />, wrapper);
