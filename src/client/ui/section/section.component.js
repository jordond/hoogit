import './section.scss';

/* eslint indent:0 */
const template = [
  '<div class="container">',
    '<div class="image" ng-show="$ctrl.image">',
      '<img class="u-max-full-width" ng-src="{{$ctrl.image}}" alt="Section image">',
    '</div>',
    '<div class="content">',
      '<div class="header"><h2>{{$ctrl.title}}</h2></div>',
      '<p class="text">{{$ctrl.text}}</p>',
    '</div>',
    '<div class="template-content" compile="$ctrl.template"></div>',
    '<div class="footer" ng-hide="{{$ctrl.last}}">',
      '<a href="#section-{{$ctrl.index + 1}}" du-smooth-scroll class="next fa fa-chevron-down"></a>',
    '</div>',
  '</div>',
].join('');

const component = {
  bindings: {
    index: '<',
    last: '<',
    image: '<',
    title: '<',
    text: '<',
    template: '<'
  },
  template
};

export default component;
