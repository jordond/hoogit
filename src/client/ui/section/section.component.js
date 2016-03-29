import './section.scss';

/* eslint indent:0 */
const template = [
  '<div class="container">',
    '<div class="image">',
      '<img ng-src="{{$ctrl.image}}" alt="Section image">',
    '</div>',
    '<div class="content">',
      '<div class="header">{{$ctrl.title}}</div>',
      '<p class="text">{{$ctrl.text}}</p>',
    '</div>',
    '<div class="transclude-content" ng-transclude></div>',
    '<div class="footer" ng-hide="{{$ctrl.last}}">',
      '<a href="#section-{{$ctrl.index + 1}}" du-smooth-scroll class="nav-button fa fa-chevron-down"></a>',
    '</div><br /><br /><br />',
  '</div>',
].join('');

const component = {
  bindings: {
    index: '<',
    last: '<',
    image: '<',
    title: '<',
    text: '<'
  },
  transclude: true,
  template
};

export default component;
