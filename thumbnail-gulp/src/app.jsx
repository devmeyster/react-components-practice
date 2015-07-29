var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
  title: 'Show Courses',
  number: 120,
  header: 'Learn React',
  description: 'React is fantastic library. React is fantastic library. React is fantastic library.',
  imageUrl: 'http://formatjs.io/img/react.svg'
  },{
  title: 'Show Courses',
  number: 25,
  header: 'Learn Gulp',
  description: 'Gulp is going to speed up your dev workflow.Gulp is going to speed up your dev workflow.Gulp is going to speed up your dev workflow.',
  imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
};

//React, please render this class
var element = React.createElement(ThumbnailList, options);



//React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));