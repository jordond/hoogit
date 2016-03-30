import './header.scss';

const content = {
  title: 'Hoog IT',
  subtitle: 'Software Development',
  tagline: '"Don\'t just do it, Hoog it." - Obama',
  image: 'http://placehold.it/300x300',
  icons: [
    {
      link: 'https://github.com/jordond',
      icon: 'fa-github'
    },
    {
      link: 'https://play.google.com/store/apps/developer?id=Jordon%20de%20Hoog&hl=en',
      icon: 'fa-android'
    },
    {
      link: 'http://jordondehoog.ca',
      icon: 'fa-user'
    }
  ]
};

/* eslint indent: 0 */
const template = [
  '<div></div>',
  '<div class="header_content">',
    '<div class="header_content_info">',
      '<span class="image"><img ng-src="{{$ctrl.content.image}}"></span>',
      '<h1 class="title">{{$ctrl.content.title}}</h1>',
      '<p class="title subtitle">{{$ctrl.content.subtitle}}</p>',
      '<p class="tagline">{{$ctrl.content.tagline}}</p>',
    '</div>',
    '<div class="header_content_footer">',
      '<ul class="icons">',
        '<li ng-repeat="icon in $ctrl.content.icons">',
          '<a href="{{icon.link}}" class="icon fa" ng-class="icon.icon"></a>',
        '</li>',
      '</ul>',
    '</div>',
  '</div>',
  '<div class="header_footer">',
    '<a href="#{{$ctrl.scrollTo}}" du-smooth-scroll class="icon fa fa-chevron-down"></a>',
  '</div>',
].join('');

function controller() {
  this.content = content;
}

const component = {
  bindings: {
    scrollTo: '@'
  },
  template,
  controller
};

export default component;
