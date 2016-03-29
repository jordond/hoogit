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
  '</div>',
].join('');

const component = {
  bindings: {
    image: '<',
    title: '<',
    text: '<'
  },
  transclude: true,
  template
};

export default component;
