import './section.scss';

/* eslint indent:0 */
const template = [
  '<div class="container">',
    '<span class="image" ng-show="$ctrl.image">',
      '<img class="u-max-full-width" ng-src="{{$ctrl.image}}" alt="Section image">',
    '</span>',
    '<div class="content">',
      '<div class="header"><h2>{{$ctrl.title}}</h2></div>',
      '<p class="text" ng-show="$ctrl.text">{{$ctrl.text}}</p>',
    '</div>',
    '<div class="transclude-content" ng-transclude></div>',
    '<div class="footer">',
      '<a ng-hide="{{$ctrl.last}}" href="#section-{{$ctrl.index + 1}}" du-smooth-scroll class="next fa fa-chevron-down"></a>',
      '<a ng-show="{{$ctrl.last}}" href="#top" du-smooth-scroll class="next to-top fa fa-chevron-up"></a>',
    '</div>',
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
