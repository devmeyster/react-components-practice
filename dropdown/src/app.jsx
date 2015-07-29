var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: "Choose a dessert", //what should show up on the button
  items: [//list of items to show in the dropdown
  'Apple Pie',
  'Peach Cobbler',
  'Coconut Cream Pie'
  ]
};

//React, please render this class
var element = React.createElement(Dropdown, options);



//React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));